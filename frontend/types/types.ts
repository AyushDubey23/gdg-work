// "I" signifies that it's an interface
import { Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  profilePhoto: string;
  phoneNumber: string;
  college: string;
  year: number;
  branch: string;
  role: 'student' | 'admin' | 'event_manager' | 'super_admin';
  oAuthProvider: 'email' | 'google' | 'github';
  googleId: string;
  githubId: string;
  emailVerified: boolean;
  lastLogin: Date;

  // IF EVER NEEDED IN FUTURE
  accountSuspended: boolean;
  accountSuspendedAt: boolean;
  accoundSuspendedBy: string;
  suspensionReason: string;
  lastActive: Date;
  codingProfiles: {
    leetcode: {
      username: string;
      rank: number;
      rating: number;
      problemsSolved: {
        easy: number;
        medium: number;
        hard: number;
        total: number;
      },
      lastUpdated: Date;
      verified: boolean;
    },
    codechef: {
      username: string;
      stars: number;
      rating: number;
      globalRank: number;
      countryRank: number;
      highestRating: number;
      lastUpdated: Date;
      verified: boolean;
    },
  },
}

export interface IEvent {
  eventName: string;
  eventType: 'Workshop' | 'Study Jam' | 'Hackathon' | 'Meetup' | 'Conference' | 'Webinar' | 'Tech Fest';
  description: string;
  eventImage: string;
  location: string;
  date: Date;
  time: string;
  capacity: number;
  registeredCount: number;
  published: boolean;
  draft: boolean;
  registeraionOpen: boolean;
  registrationDeadline: Date;
  tags: [string];
  eventCategory: 'general' | 'study-jam' | 'immerse' | 'hackblitz';
  parentEvent: string;
}