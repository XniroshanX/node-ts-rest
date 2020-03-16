import mongoose, { Schema, Document } from 'mongoose';

export interface UserModelInterface extends Document {
    username: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true }
});


export default mongoose.model<UserModelInterface>('User', UserSchema);
