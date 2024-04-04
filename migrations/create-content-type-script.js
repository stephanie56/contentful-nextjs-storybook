module.exports = function (migration) {
  const product = migration
    .createContentType("product")
    .name("Product")
    .displayField("productName");
  product
    .createField("productName")
    .name("Product name")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("image")
    .name("Image")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset",
    });

  product
    .createField("tags")
    .name("Tags")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",
      validations: [],
    });

  product
    .createField("price")
    .name("Price")
    .type("Number")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  product
    .createField("authorName")
    .name("Author")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");
  product
    .createField("planId")
    .name("Plan ID")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  product
    .createField("categories")
    .name("Categories")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["categories"],
        },
      ],

      linkType: "Entry",
    });

  product
    .createField("description")
    .name("Description")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledNodeTypes: ["heading-1", "hyperlink", "ordered-list"],
      },
      {
        enabledMarks: ["bold", "italic", "underline"],
      },
    ])
    .disabled(false)
    .omitted(false);

  product.changeFieldControl("productName", "builtin", "singleLine", {});
  product.changeFieldControl("slug", "builtin", "slugEditor", {});
  product.changeFieldControl("image", "builtin", "assetLinksEditor", {});
  product.changeFieldControl("tags", "builtin", "tagEditor", {});
  product.changeFieldControl("price", "builtin", "numberEditor", {});
  product.changeFieldControl("authorName", "builtin", "entryLinkEditor", {});
  product.changeFieldControl("planId", "builtin", "singleLine", {});
  product.changeFieldControl("categories", "builtin", "entryLinksEditor", {});
  product.changeFieldControl("description", "builtin", "richTextEditor", {});
  const productSection = migration
    .createContentType("productSection")
    .name("Product Section")
    .displayField("title");
  productSection
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  productSection
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  productSection
    .createField("products")
    .name("Products")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["product"],
        },
      ],

      linkType: "Entry",
    });

  const brand = migration
    .createContentType("brand")
    .name("Author")
    .description("")
    .displayField("authorName");
  brand
    .createField("authorName")
    .name("Full Name")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField("logo")
    .name("Logo")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  brand
    .createField("authorDescription")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField("website")
    .name("Website")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField("twitter")
    .name("Twitter")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField("email")
    .name("Email")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField("phone")
    .name("Phone #")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",
      validations: [],
    });

  brand.changeFieldControl("authorName", "builtin", "singleLine", {});
  brand.changeFieldControl("logo", "builtin", "assetLinkEditor", {});
  brand.changeFieldControl("authorDescription", "builtin", "markdown", {});
  brand.changeFieldControl("website", "builtin", "singleLine", {});
  brand.changeFieldControl("twitter", "builtin", "singleLine", {});
  brand.changeFieldControl("email", "builtin", "singleLine", {});
  brand.changeFieldControl("phone", "builtin", "tagEditor", {});
  const lesson = migration
    .createContentType("lesson")
    .name("Lesson")
    .description("")
    .displayField("title");
  lesson
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lesson
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  lesson
    .createField("body")
    .name("Body")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  lesson
    .createField("instructor")
    .name("Instructor")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["instructor"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  lesson
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  lesson
    .createField("seo")
    .name("SEO")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["seo"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  lesson.changeFieldControl("title", "builtin", "singleLine", {});
  lesson.changeFieldControl("slug", "builtin", "slugEditor", {});
  lesson.changeFieldControl("body", "builtin", "richTextEditor", {});
  lesson.changeFieldControl("instructor", "builtin", "entryLinkEditor", {});
  lesson.changeFieldControl("image", "builtin", "assetLinkEditor", {});
  lesson.changeFieldControl("seo", "builtin", "entryLinkEditor", {});
  const seo = migration
    .createContentType("seo")
    .name("SEO")
    .description("")
    .displayField("title");
  seo
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo
    .createField("description")
    .name("Description")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo
    .createField("keywords")
    .name("Keywords")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo.changeFieldControl("title", "builtin", "singleLine", {});
  seo.changeFieldControl("description", "builtin", "singleLine", {});
  seo.changeFieldControl("keywords", "builtin", "singleLine", {});
  const instructor = migration
    .createContentType("instructor")
    .name("Instructor")
    .description("")
    .displayField("fullName");
  instructor
    .createField("fullName")
    .name("Full Name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  instructor
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  instructor
    .createField("bio")
    .name("Bio")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  instructor
    .createField("website")
    .name("Website")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  instructor
    .createField("avatar")
    .name("Avatar")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  instructor.changeFieldControl("fullName", "builtin", "singleLine", {});
  instructor.changeFieldControl("slug", "builtin", "slugEditor", {});
  instructor.changeFieldControl("bio", "builtin", "singleLine", {});
  instructor.changeFieldControl("website", "builtin", "urlEditor", {});
  instructor.changeFieldControl("avatar", "builtin", "assetLinkEditor", {});
  const tutorials = migration
    .createContentType("tutorials")
    .name("Tutorials")
    .description("")
    .displayField("title");
  tutorials
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  tutorials
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  tutorials
    .createField("material")
    .name("Material")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset",
    });

  tutorials
    .createField("categories")
    .name("Categories")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");
  tutorials.changeFieldControl("title", "builtin", "singleLine", {});
  tutorials.changeFieldControl("description", "builtin", "markdown", {});
  tutorials.changeFieldControl("material", "builtin", "assetLinksEditor", {});
  tutorials.changeFieldControl("categories", "builtin", "entryLinkEditor", {});
  const categories = migration
    .createContentType("categories")
    .name("Categories")
    .description("")
    .displayField("category");
  categories
    .createField("category")
    .name("category")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  categories.changeFieldControl("category", "builtin", "singleLine", {});
};
