import { IEvent } from "@/types/types";
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true,
  },
  eventType: {
    type: String,
    required: [true, 'Event type is required'],
    enum: ['Workshop', 'Study Jam', 'Hackathon', 'Meetup', 'Conference', 'Webinar', 'Tech Fest'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  eventImage: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
  },
  capacity: {
    type: Number,
    default: 100,
  },
  registeredCount: {
    type: Number,
    default: 0,
  },
  published: {
    type: Boolean,
    default: false,
  },
  draft: {
    type: Boolean,
    default: false,
  },
  registrationOpen: {
    type: Boolean,
    default: true,
  },
  registrationDeadline: {
    type: Date,
    default: null,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // For special events
  eventCategory: {
    type: String,
    enum: ['general', 'study-jam', 'immerse', 'hackblitz'],
    default: 'general',
  },
  // For Immerse (multi-event fest)
  parentEvent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    default: null,
  },
}, {
  timestamps: true,
});

const Event = mongoose.models?.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;