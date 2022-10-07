declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /**
       * API_HOST on where to get data from
       */
      API_HOST: string;
      /**
       * USERNAME to log in
       */
      USERNAME: string;
      /**
       * PASSWORD of the username
       */
      PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
