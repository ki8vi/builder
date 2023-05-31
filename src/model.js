import img from "./img/img.png";
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from "./classes/blocks";

export const model = [
    new TitleBlock("Oh my builder", {
        tag:"h2",
        styles: {
            background:"linear-gradient(to right, #ff3579, #416338)",
            color:"#fff",
            "text-align":"center",
            padding:"1.5rem"
        }
    }),
    new TextBlock("some text", {
        styles: {
            background:"linear-gradient(to left, #f2994a, #f2c94c)", 
            padding: "1rem",
            "font-weight": "bold"
        }
    }),
    new ColumnsBlock([
        "1",
        "2",
        "3",
        "4",
        "5"
    ], {
        styles: {
            background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
            padding: "2rem",
            color: "#fff",
            "font-weight": "bold"
        }
    }), 
    new ImageBlock(img, {
       styles: {
        padding: "2rem 0",
        display: "flex",
        "justify-content": "center"},
        imageStyles: {
            width: "500px",
            height: "auto"
        }
    })
];