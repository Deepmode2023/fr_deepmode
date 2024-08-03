import { streamConditionEnum } from "./enum";

class StreamSessionClient {
  _stream_condition: ReturnType<typeof streamConditionEnum> =
    streamConditionEnum("CLOSE");
  constructor() {}
}

const streamSessionClientInstance = new StreamSessionClient();

export { streamSessionClientInstance, StreamSessionClient };
