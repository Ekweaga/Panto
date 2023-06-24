//const passport = require("passport")
const express = require("express")
const db = require("../database")
const app = express();
 const  bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
 const  swaggerUi = require("swagger-ui-express");
 const authRoutes = require("../routes/authRoutes")
 const productRoutes = require("../routes/productRoutes")
 const orderRoutes = require("../routes/orderRoutes")
 const cartRoutes= require("../routes/cartRoutes")


db();

const PORT = 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
//app.use(passport.initialize());
app.use("/auth",authRoutes)
app.use("/product",productRoutes)
app.use("cart",cartRoutes)
//app.use("/order",orderRoutes)
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "E-COMMERCE API",
        version: "0.1.0",
        description:
          "This is Panto project, an e-commerce project",
        license: {
          name: "",
          url: "https://spdx.org/licenses/MIT.html",
        },
        
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["./routes/authRoutes/*.js","./routes/productRoutes/*.js","./routes/cartRoutes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
      explorer: true,
      customCssUrl:
        "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    })
  );
app.listen(PORT, ()=>console.log("Express started, backendApis"))

module.exports =app

