<template>
    <div class="frame mb-6 pt-2 pb-4">

        <div class="flex flex-col">

            <div class="flex items-end justify-between w-full md:w-auto">

              <div class="flex flex-row">
                <div class="icon--mode">
                  <IconFilm v-if="downloadEntry.mode === 'video'" />
                  <IconMusic v-else />
                </div>
                <div class="smalltext-metadata ml-1">
                    {{typeof(downloadEntry.quality) != 'undefined' ? downloadEntry.quality : 'best'}} <!-- I also need to support older downloads that may not have a value for quality. These were downlaoded at the best quality possible. -->
                </div>
                <div class="smalltext-metadata ml-1">
                    {{getQueuedDateString(downloadEntry.queued_timestamp)}}
                </div>
              </div>

                <div class="button-remove" v-on:click="removeDownload">
                    <IconX />
                </div>
            </div>

            <div class="flex flex-col-reverse md:flex-row w-full mt-2">
            
                <div class="flex flex-col">
                    <a :href="downloadEntry.webpage_url" target="_blank" title="To the original source">
                        <div class="thumbnail flex-shrink-0" :style="'--thumbnail: url(\'' + downloadEntry.thumbnail_url + '\')'">
                            <div class="thumbnail__vignette" />
                            <div class="thumbnail__duration">{{getDurationString(downloadEntry.duration)}}</div>
                        </div>
                    </a>

                    <!-- Progress bar -->
                    <div v-if="downloadEntry.status === 'downloading'">
                        <div class="status--progressbar flex w-full mt-3">
                            <div class="status--progressbar__good items-stretch" :style="'--download-progress: ' + downloadEntry.download_progress + '%;'"></div>
                        </div>
                        <div class="status--progressbar__text">
                            {{downloadEntry.download_progress}}%
                        </div>
                    </div>

                    <!-- Ready -->
                    <a v-else-if="downloadEntry.status === 'finished'" :href="downloadEntry.download_url" title="download">
                        <div class="status--ready mt-3 button flex justify-center w-full">
                            <div>
                                <IconDownload />
                            </div>
                        </div>
                    </a>

                     <!-- Queued -->
                    <div v-else-if="downloadEntry.status === 'queued'">
                        <div class="status--queued mt-3">
                            Queued
                        </div>
                    </div>

                    <!-- Failed -->
                    <div v-else-if="downloadEntry.status === 'failed'">
                        <div class="status--failed mt-3">
                            Failed!
                        </div>
                    </div>

                </div>

                <div class="flex flex-col md:ml-4 w-full overflow-x-hidden overflow-y-visible">
                    <h1 class="title">{{downloadEntry.title}}</h1>
                    
                    <div class="relative my-4">
                      <div v-if="downloadEntry.description != ''">
                        <p class="description p-2">
                            <span v-html="linebreaksToBrTags(downloadEntry.description)" />
                        </p>
                        <div class="description__decobox description__decobox--left" />
                        <div class="description__decobox description__decobox--right" />
                      </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import IconDownload from "~/components/Icons/download.vue";
import IconX from "~/components/Icons/x.vue";
import IconFilm from "~/components/Icons/film.vue";
import IconMusic from "~/components/Icons/music-note.vue";
import axios from "axios";

export default {
    components: {
        IconDownload,
        IconX,
        IconFilm,
        IconMusic
    },
        
    props: {
        downloadEntry: {type: Object},
    },

    methods: {
      getQueuedDateString: function(unixTime) {
        var queuedDate = new Date(unixTime * 1000);
        var ret = ('0' + queuedDate.getDate()).slice(-2) + '.' + ('0' + (queuedDate.getMonth()+1)).slice(-2) + '.' + queuedDate.getFullYear();
        return ret;
      },
      getDurationString: function(unixTime) {
        if (unixTime < 0) return "";
        else if (unixTime > 360000) return ""; // Something is not right if the video is over 100 hours long

        const h = Math.floor(unixTime / 3600);
        const m = Math.floor((unixTime % 3600) / 60);
        const s = Math.floor((unixTime % 3600) % 60);

        var ret = "";
        if (h > 0) ret = String(h).padStart(2, '0') + ":";

        ret += String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
        return ret;
      },
      linebreaksToBrTags: function(str) {
        return str.replace("\n", '<br />');
      },
      removeDownload: function() {
        const that = this;
        axios.post("/api", {
          request: "remove_download_entry",
          id: this.downloadEntry.tubio_id
        }).then(function(response) {
          if (response.data.status === "OK") {
            that.$store.dispatch("dlcache/update", that);
          }
        });
      },
    },
}
</script>

<style lang="scss" scoped>
.frame {
  width: 100%;
  border-bottom: 2px solid theme("colors.gray-1");

  & .smalltext-metadata {
    font-family: ZillaSlab, serif;
    font-size: 12pt;
    color: theme("colors.text-gray-1");

    &::before {
      content: '|';
    }
  }

  & .thumbnail {
    background-image: var(--thumbnail);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    height: calc(150px * (9 / 16));
    position: relative;
    cursor: pointer;
    scrollbar-width: none;
    backface-visibility: hidden;    // prevent flickering on mover
    transform: translate3d(0, 0, 0);// prevent flickering on mover
    transform-style: preserve-3d;   // prevent flickering on mover
    transition: transform 0.2s ease;

    @media (max-width: theme('screens.md')) {
      width: 100%;
      height: 130px;
    }

    &:hover {
      transform: scale(1.05); /* shit causes flickering */
    }

    &__vignette {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: 0 0 15px 2px #000;
    }

    &__duration {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 3px 3px 0;
      text-align: right;
      font-size: 12pt;
      color: theme("colors.text-gray-1");
      background-color: #000a;
    }
  }

  & .title {
    color: theme("colors.text-gray-1");
    font-size: 22pt;
    max-height: 1.3em;
    overflow-y: hidden;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .description {
    color: theme("colors.text-gray-1");
    font-size: 14pt;
    height: 100px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    background-color: #0003;

    @media (max-width: theme('screens.md')) {
      overflow: scroll;
    }

    &__decobox {
      position: absolute;

      &--left {
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border-top: 2px solid theme("colors.gray-1");
        border-left: 2px solid theme("colors.gray-1");
        pointer-events: none;
      }

      &--right {
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        border-bottom: 2px solid theme("colors.gray-1");
        border-right: 2px solid theme("colors.gray-1");
        pointer-events: none;
      }
    }
  }

  & .status {
    &--progressbar {
      background-color: #900;
      height: 5px;

      &__good {
        background-color: #0b0;
        width: var(--download-progress); // Download progress
        transition: width 1s;
      }

      &__text {
        font-size: 24pt;
        color: theme("colors.text-gray-1");
      }
    }

    &--ready {
      height: 45px;
      background-color: theme("colors.text-gray-1");
      transition:
        background-color 0.2s,
        border 0.2s;

      &:hover {
        background-color: theme("colors.purple-1");
        color: #fff;
      }

      & svg {
        height: 35px;
      }
    }

    &--queued {
      font-family: ZillaSlab, serif;
      font-size: 24pt;
      color: theme("colors.text-gray-1");
    }

    &--failed {
      font-family: ZillaSlab, serif;
      font-size: 24pt;
      color: theme("colors.text-error-1");
    }
  }

  & .button-remove {
    width: 35px;
    height: 35px;
    fill: theme("colors.gray-0");
    stroke: theme("colors.gray-0");
    cursor: pointer;
    transition:
      background-color 0.2s,
      border-radius 0.2s;

    &:hover {
      background-color: #d40;
      border-radius: 50%;
    }
  }

  &::-webkit-scrollbar,
  & *::-webkit-scrollbar {
    display: none;
  }

  & .icon--mode {
    width: 20px;
  }
}
</style>
