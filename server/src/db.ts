import mongoose from "mongoose"

mongoose.connect(
    process.env.MONGO_URI as string,
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
      if (!err) {
        console.log("mongodb: connection successful!");
      } else {
        console.error("mongodb: connection failed");
      }
    }
  );

  export default mongoose;