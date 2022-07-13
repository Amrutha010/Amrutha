class ValidationError extends Error {

    constructor(message) {
      super(message);  // call parent class constructor
      this.name = 'ValidationError';
      this.code = '42';
    }
  
    printCustomerMessage() {
       return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
    }
  
  }
  
  try {
    throw new ValidationError("Not a valid phone number");
  } catch (error) {
     if (error instanceof ValidationError) {
      console.log(error.name); // Now this is ValidationError!
      console.log(error.printCustomerMessage());
    } else {
      console.log('Unknown error', error);
      throw error;
    }
  }
  