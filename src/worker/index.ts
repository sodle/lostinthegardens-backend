import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";

const app = new Hono<{ Bindings: Env }>();

app.use(trimTrailingSlash());
app.get("/api", (c) =>
  c.json({
    ios: {
      yorkstreet: {
        latestShapefile: {
          url: "/api/shapefiles/yorkstreet/1",
          effectiveDate: "2025-09-05",
          sha256:
            "3ba314db2b2aa1b2f194e44d3396a72eaf82d1077376d8dbd09c138a705d768b",
        },
        latestCategoryFile: {
          url: "/api/category_files/yorkstreet/1",
          effectiveDate: "2025-09-05",
          sha256:
            "30b3fc44a4e9aaf828c1d5d196b7e26a8eefda9392d2f854b4fa84c0dec37ff1",
        },
      },
    },
  })
);

const yorkStreetShapefiles = [await import("./shapefiles/yorkstreet/01.json")];
const yorkStreetCategoryFiles = [
  await import("./category_files/yorkstreet/01.json"),
];

app.get("/api/:fileType/:location/:id", (c) => {
  let fileType = c.req.param("fileType");
  let location = c.req.param("location");
  let fileIndex = parseInt(c.req.param("id")) - 1;
  if (
    location == "yorkstreet" &&
    fileType == "shapefiles" &&
    fileIndex < yorkStreetShapefiles.length
  ) {
    return c.json(yorkStreetShapefiles[fileIndex]);
  }
  if (
    location == "yorkstreet" &&
    fileType == "category_files" &&
    fileIndex < yorkStreetCategoryFiles.length
  ) {
    return c.json(yorkStreetCategoryFiles[fileIndex]);
  }
  return c.notFound();
});

export default app;
