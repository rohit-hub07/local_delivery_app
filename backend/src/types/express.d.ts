import { User, Vendor } from '@prisma/client';
// import { Vendor } from '../generated/prisma/client.ts';

declare global {
  namespace Express {
    interface Request {
      user?: User; 
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      vendor?:Vendor
    }
  }
}