// 放webchat's divId
var BotChatGoesHereDivId = 'BotChatGoesHere';
// 放webchat 下方的divId
var WebChatButtonDivId = 'WebChatButton';
// 放webchat 開啟的divId
var WebChatDialogDivId = 'WebChatDialog';
var conversationIdKey = 'conversationId';
var BotChatUI = /** @class */ (function () {
    function BotChatUI(config) {
        config.botChatIconUrl = config.botChatIconUrl || 'https://bot-framework.azureedge.net/bot-icons-v1/bot-framework-default-7.png';
        this.botChatUIConfig = config;
        var content = "<div ID=\"" + WebChatButtonDivId + "\" onclick=\"BotChatUI.onClickWebChatButton()\"></div><div id=\"" + WebChatDialogDivId + "\"></div>";
        var fragment = this.create(content);
        // 把 div 加到目前的 Page 之中
        document.body.insertBefore(fragment, document.body.childNodes[0]);
        // 使用者，可以未指定或是從AP讀進來
        this.user = {
            id: config.userId,
            name: config.userName
        };
        this.bot = {
            id: config.botId,
            name: config.botName
        };
        BotChatUI._instance = this;
        // 設定縮小時，機器人的圖
        var chatButton = document.getElementById(WebChatButtonDivId);
        if (chatButton) {
            chatButton.setAttribute('style', "background:url(" + config.botChatIconUrl + ");background-size: cover");
        }
        BotChatUI.isShowWebChatButton(config.showWebChatButton);
        // 設定 webchat 中的機器人圖示
        var css = '.wc-message-from-bot .wc-message-content:before {background-image:' + ("url(" + config.botChatIconUrl + ");") + '}', style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.body.appendChild(style);
    }
    BotChatUI.getInstance = function () {
        return this._instance;
    };
    BotChatUI.prototype.create = function (htmlStr) {
        var frag = document.createDocumentFragment(), temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    };
    BotChatUI.prototype.startConversation = function () {
        var _this = this;
        console.log('startConversation');
        var botChatGoesHereDiv = document.getElementById(BotChatGoesHereDivId);
        if (!botChatGoesHereDiv) {
            botChatGoesHereDiv = document.createElement('div');
            botChatGoesHereDiv.id = BotChatGoesHereDivId;
            document.getElementById(WebChatDialogDivId).appendChild(botChatGoesHereDiv);
        }
        // 這裡請用您 bot 的相關資訊
        this.botConnection = new BotChat.DirectLine(this.botChatUIConfig.directLineOptions);
        // 讀取 conversationId
        var conversationId = sessionStorage.getItem(conversationIdKey);
        if (conversationId) {
            // 在目前 session 中有使用 bot 了
            this.botConnection.conversationId = conversationId;
        }
        this.botConnection.watermark = '';
        BotChat.App({
            locale: this.botChatUIConfig.locale,
            resize: 'window',
            chatTitle: this.botChatUIConfig.chatTitle,
            user: this.user,
            bot: this.bot,
            botConnection: this.botConnection
        }, document.getElementById(BotChatGoesHereDivId));
        var isLocal = this.botChatUIConfig.directLineOptions.domain.indexOf('webchat.botframework.com') === -1;
        if (!conversationId && isLocal) {
            setTimeout(function () {
                _this.botConnection.postActivity({
                    from: _this.user,
                    membersAdded: [_this.bot],
                    membersRemoved: [],
                    type: "conversationUpdate"
                }).subscribe(function (id) {
                });
                _this.botConnection.postActivity({
                    from: _this.user,
                    membersAdded: [_this.user],
                    membersRemoved: [],
                    type: "conversationUpdate"
                }).subscribe(function (id) {
                });
            }, 100);
        }
    };
    BotChatUI.prototype.endConversation = function () {
        console.log('endConversation');
        sessionStorage.setItem(conversationIdKey, this.botConnection.conversationId);
        this.botConnection.end();
        try {
            var botChatGoesHereDiv = document.getElementById(BotChatGoesHereDivId);
            document.getElementById(WebChatDialogDivId).removeChild(botChatGoesHereDiv);
        }
        catch (err) {
            console.log(err);
        }
    };
    // open webchat
    BotChatUI.onClickWebChatButton = function (e) {
        BotChatUI.isShowWebChat(true);
        BotChatUI.isShowWebChatButton(false);
        BotChatUI.getInstance().startConversation();
        var webchatHeaders = document.getElementsByClassName('wc-header');
        if (webchatHeaders.length > 0) {
            webchatHeaders[0].addEventListener('click', this.onClickWebChatHeader);
        }
        return false;
    };
    // close webchat
    BotChatUI.onClickWebChatHeader = function (e) {
        BotChatUI.isShowWebChat(false);
        BotChatUI.isShowWebChatButton(true);
        BotChatUI.getInstance().endConversation();
        return false;
    };
    // 是否顯示 WebChat
    BotChatUI.isShowWebChat = function (isShow) {
        var webChatDialog = document.getElementById(WebChatDialogDivId);
        if (isShow) {
            webChatDialog.style.visibility = 'visible';
        }
        else {
            webChatDialog.style.visibility = 'hidden';
        }
    };
    // 是否顯示下方的機器人圖示
    BotChatUI.isShowWebChatButton = function (isShow) {
        var webChatButton = document.getElementById(WebChatButtonDivId);
        if (isShow && BotChatUI.getInstance().botChatUIConfig.showWebChatButton) {
            webChatButton.style.display = '';
        }
        else {
            webChatButton.style.display = 'none';
        }
    };
    return BotChatUI;
}());
//# sourceMappingURL=BotChatUI.js.map