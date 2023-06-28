module.exports = ({ env }) => ({
  plausible: {
    config: {
      sharedLink: env("PLAUSIBLE_SHARED_LINK"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },

      "drag-drop-content-types": {
        enabled: true,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
