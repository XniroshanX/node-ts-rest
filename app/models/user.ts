import mongoose, { Schema, Document, model } from 'mongoose';

// this model is created using mongoose model
// for more information visit below link
// https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

export interface UserModelInterface extends Document {
    username: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true }
});


export default mongoose.model<UserModelInterface>('User', UserSchema);
