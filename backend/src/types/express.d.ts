import { User, Vendor } from '@prisma/client';
// import { Vendor } from '../generated/prisma/client.ts';
import { Server } from 'socket.io';

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

declare global {
  namespace Express {
    interface Request {
      io:Server
    }
  }
}