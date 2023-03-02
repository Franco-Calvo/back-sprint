import mongoose from 'mongoose'

const chapterSchema = new mongoose.Schema({
    manga_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'mangas' },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number },
},
    {
        time_stamps: { type: Date, default: Date.now, required: true },
    }
);

let Chapter = mongoose.model('chapters', chapterSchema);

export default Chapter