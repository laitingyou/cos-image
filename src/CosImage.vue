<script>
import loadingSVG from "../asset/loading.svg";
export default {
  name: "CosImage",
  props: {
    // 缩略图，默认 原图的缩略图
    thumbnail: {
      type: String,
      default: "",
    },
    // 缩略图清晰度1～100，默认 1
    thumbnailClarity: {
      type: Number,
      default: 1,
    },
    // 图片显示地址
    src: {
      type: String,
      default: "",
    },
    // 原图清晰度1～100，默认 100
    clarity: {
      type: Number,
      default: 100,
    },
    // thumbnail还是loading, 默认 thumbnail
    type: {
      type: String,
      default: "thumbnail",
    },
    // 原图加载结束前的loading, 默认 自带loading
    loading: {
      type: String,
      default: loadingSVG,
    },
    // 失败占位图， 默认 空
    errorImage: {
      type: String,
      default: "",
    },
  },
  methods: {
    clarityHandler(src, clarity) {
      return `${src}?imageMogr2/thumbnail/!${clarity}p`;
    },
  },
  render(h) {
    const {
      src,
      thumbnail,
      thumbnailClarity,
      clarity,
      type,
      loading,
      errorImage,

      // methods
      clarityHandler,
    } = this;
    const self = this;
    return h(
      "div",
      {
        class: ["image-box"],
      },
      [
        type === 'loading'
          ? h(
              "div",
              {
                class: ["loading-box"],
              },
              [
                h("embed", {
                  class: ["loading"],
                  attrs: {
                    src: loading,
                  },
                }),
              ]
            )
          : h("img", {
              class: ["thumbnail-image"],
              attrs: {
                src: clarityHandler(thumbnail || src, thumbnailClarity),
                ...this.$attrs,
              },
              on: {
                error(e) {
                  if (thumbnail) {
                    return (e.target.src = errorImage);
                  }
                },
              },
            }),
        h("img", {
          class: ["source-image"],
          attrs: {
            src: clarityHandler(src, clarity),
            ...this.$attrs,
          },
          on: {
            load(e) {
              if (e.target.previousElementSibling) {
                e.target.parentElement.removeChild(
                  e.target.previousElementSibling
                );
              }
              self.$emit("load");
            },
            error(e) {
              self.$emit("error");
              if (errorImage) {
                e.target.src = errorImage;
              }
              e.target.parentElement.removeChild(
                e.target.previousElementSibling
              );
            },
          },
        }),
      ]
    );
  },
};
</script>

<style scoped>
.image-box {
  position: relative;
  width: 100%;
}
.loading-box {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(19, 19, 19, .5);
}
.loading {
  width: 20%;
}
.thumbnail-image {
  width: 100%;
  position: absolute;
  z-index: 1;
}
.source-image {
  width: 100%;
}
</style>