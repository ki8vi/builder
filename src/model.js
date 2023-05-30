import img from "./img/img.png";
export const model = [
    {type: "title", value: "Oh my builder", options:{
        tag:"h2",
        //styles: `background: linear-gradient(to right, #ff0099, #493240); color:#fff; text-align: center;padding:1.5rem`
        styles: {
            background:"linear-gradient(to right, #ff3579, #416338)",
            color:"#fff",
            "text-align":"center",
            padding:"1.5rem"
        }
    }},
    {type:"text", value: "some text"},
    {type: "columns", value: [
        "1",
        "2",
        "3",
        "4",
        "5"
    ]},
    {type: "image", value: img}
];