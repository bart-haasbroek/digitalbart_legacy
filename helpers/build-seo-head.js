export function buildSeoHead(content) {
    if (!content) {
      return;
    }
    return {
      title: content.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: content.description,
        },
      ],
    };
  }