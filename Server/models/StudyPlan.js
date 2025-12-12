import mongoose from 'mongoose';

const studyPlanSchema = new mongoose.Schema({
    planName: String,
    startDate: Date,
    endDate: Date,
    description: String,
    speacialconstraints: String,
    aisuggestions: String,
},{ timestamps: true });

export default mongoose.model('StudyPlan', studyPlanSchema);