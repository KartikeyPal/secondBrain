import mongoose from "mongoose";
import { Schema, model, connect } from 'mongoose';

export const connectDb = ()=>connect("mongodb://localhost:27017/secondBrain")
    .then(() => {
        console.log("mongoDb is connected");
    })
    .catch((err) => {
        console.error("mongoDb connection error:", err);
    });

//creating all Schema 
const UserSchema = new Schema({
    userName: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const ContentSchema  = new Schema({
        link: {
            type:String,
            required:true
        },
        type: {
        type: String,
        enum: ["twitter", "youtube", "document", "link"],
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag",
    }],
    userId: {
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps: true
})

const TagsSchema  = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const LinkSchema  = new Schema({
    hash: {
        type:String,
        required: true,
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    }
})
// Exporting all Schema
export const User = model("User",UserSchema);
export const Content = model("Content", ContentSchema);
export const Tag   = model("Tag",TagsSchema);
export const Link = model("Link",LinkSchema)