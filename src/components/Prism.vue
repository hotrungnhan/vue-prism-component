<script>
import { h, defineComponent } from "vue";
import Prism from "prismjs";

export default defineComponent({
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    lang: {
      type: String,
      default: "markup",
    },
  },
  setup(props, { slots }) {
    const defaultSlot = (slots && slots.default && slots.default()) || [];
    const code = props.code
      ? props.code
      : defaultSlot && defaultSlot.length
      ? defaultSlot[0].children
      : "";
    return () => {
      const inline = props.inline;
      const language = props.lang;
      const prismLanguage = Prism.languages[language];
      const className = `language-${language}`;
      if (process.env.NODE_ENV === "development" && !prismLanguage) {
        throw new Error(
          `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
        );
      }
      if (inline) {
        return h("code", {
          class: [className],
          innerHTML: Prism.highlight(code, prismLanguage),
        });
      }
      return h(
        "pre",
        {
          class: [className],
        },
        [
          h("code", {
            innerHTML: Prism.highlight(code, prismLanguage),
          }),
        ]
      );
    };
  },
});
</script>