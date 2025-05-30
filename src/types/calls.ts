export type CallStatus = 'idle' | 'calling' | 'ringing' | 'in-progress' | 'ended';

export type Call = {
  id: string;
  from: string;
  to: string;
  status: CallStatus;
  duration: number;
  timestamp: Date;
  recordingUrl?: string;
  transcript?: string;
};
