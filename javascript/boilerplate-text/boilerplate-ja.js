// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.currLang = {
  'ar':'アラビア語',
  'bg':'ブルガリア語',
  'da':'デンマーク語',
  'de':'ドイツ語',
  'el':'ギリシャ語',
  'en':'英語',
  'es':'スペイン語',
  'fr':'フランス語',
  'he':'ヘブライ語',
  'hi':'ヒンディー語',
  'hu':'ハンガリー語',
  'it':'イタリア語',
  'ja':'日本語',
  'ko':'韓国語',
  'nl':'オランダ語',
  'pl':'ポーランド語',
  'pt':'ポルトガル語',
  'pt-br':'ポルトガル語',
  'ro':'ルーマニア語',
  'ru':'ロシア語',
  'sv':'スウェーデン語',
  'th':'タイ語',
  'tr':'トルコ語',
  'uk':'ウクライナ語',
  'vi':'ベトナム語',
  'zh-hans':'簡体中国語',
  'zh-hant':'繁体中国語',
}

s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""


// TRANSLATE THE FOLLOWING
s.i18nActivityHome = "I18N アクティビティ ホーム"
s.moreResourcesOfThisType = "この技術に関連する他のリソース"
s.accessKeyN = 'アクセスキー n により、<a href="#internal-links" accesskey="n">ページ内ナビゲーション</a>へスキップします。<a href="#contentstart">文章の開始までスキップします。</a>'
s.examplesInAnotherScript = "この文書には、他の言語で書かれた例やスクリプトが存在します。"
s.worldMap = "世界地図"
s.searchI18nSite = "I18n サイト検索"
s.translationDisclaimer = 'この文書は翻訳版です。エラーや訳の食い違いがある場合は、<a href="'+f.filename+'.en">英語で書かれた最新版のオリジナル文書</a>を信頼するようにしてください。<a href="#copyright">オリジナル文書の著作権</a>は W3C および、次に記す人間や団体に帰属します。'
s.translator = "訳者:"
s.relatedLinks = "関連するリンク"
s.articles = "記事" // used in breadcrumbs, top right of page
s.topicIndexText = "トピックインデックス"
s.techIndexText = "技術インデックス"
s.gotoW3cHome = "W3C のホームページへ"
s.gotoI18nHome = "国際化アクティビティのホームページへ"
s.internationalizationTitle = "国際化"
s.i18nActivityHomePage = "国際化アクティビティ ホームページ"
s.home = "ホーム"
s.aboutI18nActivity = "国際化アクティビティについて"
s.about = "アクティビティ"
s.groupsThatMakeUp = "国際化アクティビティを構成するグループ一覧"
s.groups = "グループ"
s.topicIndexForInformation = "サイト内情報のトピックインデックス"
s.topics = "トピック"
s.taskBasedIndex = "i18n 技術に関するタスクベースのインデックス"
s.techniques = "技術"
s.informationResources = "国際化サイトに関する情報"
s.resources = "リソース"
s.newsFiltersAndFeeds = "W3C 国際化アクティビティの RSS フィードおよび、ニュースフィルタに関する情報"
s.news = "ニュース"
s.onThisPage = "このページ内"
s.questionAlt = "質問"
s.questionLink = "質問"
s.question = "質問"
s.backgroundAlt = "歴史的な背景"
s.backgroundLink = "背景"
s.background = "背景"
s.answer = "回答" // heading
s.answerAlt = "回答"
s.answerLink = "回答"
s.byTheWayAlt = "他に役立つ情報"
s.byTheWayLink = "ところで"
s.byTheWay = "ところで"
s.furtherReadingAlt = "さらなる情報"
s.furtherReadingLink = "さらなる情報"
s.furtherReading = "さらなる情報"
s.intendedAudience = "想定する読者:"
s.skipToAnswer = "[回答にスキップする]"
s.tellUsWhatYouThink = "ご意見をお聞かせください(英語でお願いします)"
s.sendAComment = "コメントを送る"
s.subscribeToRSS = "RSSフィードを購読する"
s.newResourcesAlt = "(ホームページ上のニュースのうち)初めて公開される新しいリソースのみ通知します"
s.newResources = "新しいリソース"
s.homePageNewsAlt = "ホームページ上に表示されるすべてのニュースを購読します"
s.homePageNews = "ホームページニュース"
s.followOurNews = "最新ニュースをフォロー"
s.sentenceDelimiter = "."

s.author = "作成者:" // followed by name of author(s)
s.previousAuthors = "前回の作成者:" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "更新者:" // person's name appears after colon
s.translatedBy = "訳者:"
s.validXHTML = "Valid な XHTML 1.0 です!"
s.validCSS = "Valid な CSS です!"
s.codedInUtf8 = "UTF-8 でエンコードされています!"

s.translatedFromEnglishVer = dt.enVersion+" GMT に英文コンテンツから翻訳されました。翻訳内容の最終更新は "+dt.thisVersionPlain+" GMT に行われました。"

s.historyOfDocumentChanges = '文書の更新履歴については、実質的な変更については<a href="http://www.w3.org/blog/International/tag/'+f.searchString+'/">ニュースフィード</a>を、2016年1月以降の完全な変更履歴については<a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/'+f.directory+f.filename+'.en.html">GitHubのコミット</a>を、それぞれ参照してください。'
s.untranslatedChanges = '<strong>注意:</strong> この文書が翻訳されてからより後で<a href="'+f.filename+'.en">オリジナルである英語版</a>へ変更が加えられています。その変更は反映されておらず、一部のくだりは翻訳が更新されるまで英語のままかもしれません。'
s.unlinkedTranslation = '<strong>警告:</strong> この文書が翻訳されてからより後で英語版へ大きな変更が加えられています。翻訳が更新されるまで、できれば<a href="'+f.filename+'.en">英語版</a>をお読みください。'
s.new="新着"// placed alongside new articles at http://www.w3.org/International/articlelist
s.updated="更新" // same as New
s.translation_updated="翻訳更新日時:" // date appears after colon

s.aboutThisArticle="この記事について" // title in the right column near the top of the page
s.status_draft="この記事は、公開レビュー前の草案です。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_review="この記事は現在公開レビュー中です。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_published="この記事は、W3C 国際ワーキンググループによりレビューが行われていると同時に、できる限り正確なものにするため公開レビューも行われています。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_notreviewed="この記事は公開レビューなしで正式公開されました。対処すべき部分がある場合は、<a href='#survey'>ページ下部近くにあるリンク</a>からフィードバックを送ってください。"
s.status_obsolete="この記事は放棄されました。もはや保守されることはなく、不正確になりつつあります。最新の情報については、<a href='http://www.w3.org/International/'>Internationalization Activityのホームページ</a>を参照してください。"
s.tests="テスト" // used at the end of breadcrumbs for test related pages
s.quickanswer = "要約的な回答" // heading
s.longeranswer = "詳細な回答" // heading
s.additionalinfo = "補足情報" // heading that sometimes follows 'Details'
s.acknowledgements = "この文書へ貢献またはフィードバックを送ってくださった以下の方々に感謝します:" // used at bottom of page to list people who provided feedback. The list comes after this text.
s.cookieMsg = "ブラウザーにクッキーを設定させると、W3C Internationalization Activityのページを（もしあるなら）選択した言語で続けて閲覧できるでしょう。クッキーを設定しますか？" // this text is to be copied to another location
s.githubRedirect = "<strong>NOTE!</strong> &nbsp; This is only an editor\'s draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/"+f.directory+f.filename+"."+f.clang+"'>version on the W3C site</a>." // used for github-based versions of published articles
