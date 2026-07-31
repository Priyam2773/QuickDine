import mongoose, { Document, model, Schema, Types } from 'mongoose'

export interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    role: "user" | "admin" | "owner";
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        password: { type: String, required: true, minlength: 6 },
        phone: { type: String, trim: true, minlength: 6 },
        role: { type: String, enum: ["user", "admin", "owner"], default: "user" },
    },
    { timestamps: true }
)
// Schema password when converting to JSON
UserSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;

    }
})


export const User = (mongoose.models && mongoose.models.User) ? (mongoose.models.User as mongoose.Model<IUser>) : model<IUser>("User", UserSchema)