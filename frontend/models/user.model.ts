import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '@/types/types';

const userSchema = new mongoose.Schema<IUser>({
  fullName: {
    type: String,
    required: [true, 'Full Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    select: false, // Don't return password by default
  },
  profilePhoto: {
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  college: {
    type: String,
    default: null,
  },
  year: {
    type: Number,
    min: 1,
    max: 5,
    default: null,
  },
  branch: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'event_manager', 'super_admin'],
    default: 'student',
  },
  oAuthProvider: {
    type: String,
    enum: ['email', 'google', 'github'],
    default: 'email',
  },
  googleId: {
    type: String,
    default: null,
  },
  githubId: {
    type: String,
    default: null,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next();
})

// Method to compare password
userSchema.methods.comparePassword = async function (pass: string) {
  return await bcrypt.compare(pass, this.password);
};

// Method to get public profile
userSchema.methods.toPublicJSON = function () {
  return {
    id: this._id,
    fullName: this.fullName,
    email: this.email,
    profilePhoto: this.profilePhoto,
    phone: this.phone,
    college: this.college,
    year: this.year,
    branch: this.branch,
    role: this.role,
    oauthProvider: this.oauthProvider,
    emailVerified: this.emailVerified,
    createdAt: this.createdAt,
  };
};

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;