var initial='<link href="./css/botchat.css" rel="stylesheet" />\
    <link href="./css/botchat-fullwindow.css" rel="stylesheet" />\
    <link href="./css/botchatCustom.css" rel="stylesheet" />\
    <script src="./js/botchat-es5.js"></script>\
    <script src="./js/BotChatUI.js"></script>\
    <script>\
        var botChatUI = new BotChatUI({\
            botId: \'botId\',\
            botName: \'botName\',\
            userId: \'userId\',\
            userName: \'userName\',\
            chatTitle: \'客服機器人\',\
            locale: \'zh-tw\',\
            directLineOptions: {\
                secret: \'WpJVYnKtYjg.1rXpbsjAxIo_qGBw6RQEnnzxIy0lxTA19IG2btmScFY\',\
                token: \'\',\
                domain: \'\',\
                pollingInterval: 1000,\
                webSocket: false\
            },\
			botChatIconUrl: \'./images/MiINVBot_icon_3-2.png\',\
            showWebChatButton: true\
        })\
    </script>';
document.write(initial);