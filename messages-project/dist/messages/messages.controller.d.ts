import { MessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: MessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
