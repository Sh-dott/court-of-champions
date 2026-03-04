const WEEKS=[
{id:1,title:"כבדו את המשחק",value:"כבוד",icon:"\uD83C\uDFC0",badge:"\uD83D\uDE4F",badgeName:"כבוד",
scenario:"במהלך משחק צמוד, השופט קורא לעבירה עליך שלא ביצעת. הקבוצה שלך מאבדת את הכדור ברגע קריטי. חבריך לקבוצה מסתכלים עליך ומחכים לראות איך תגיב.",
options:[
{text:"לצעוק על השופט ולהתווכח בקול רם",points:0,feedback:"לכעוס על השופט אף פעם לא משנה את ההחלטה. גם שופטים הם בני אדם - הם טועים, בדיוק כמו שחקנים."},
{text:"לקחת נשימה עמוקה, לקבל את ההחלטה ולחזור להגנה",points:10,feedback:"מדהים! לקבל החלטות קשות בצורה מכובדת מראה ספורטיביות אמיתית. השחקנים הטובים ביותר מתמקדים במשחק הבא, לא באחרון."},
{text:"לגלגל עיניים ולמלמל תלונות בשקט",points:5,feedback:"שמרת על קור רוח מבחוץ, אבל שפת גוף שלילית עדיין מראה חוסר כבוד. תעלו את האנרגיה למשחק חזק יותר."}],
quiz:{question:"מה באמת המשמעות של ספורטיביות?",options:[{text:"לנצח בכל מחיר",correct:false},{text:"להתייחס לכולם בכבוד, בין אם מנצחים או מפסידים",correct:true},{text:"להיות נחמד רק כשהקבוצה מנצחת",correct:false}],explanation:"ספורטיביות פירושה לגלות כבוד לכולם - חברי קבוצה, יריבים, שופטים ומאמנים - לא משנה מה התוצאה!"},
homeTask:"כתבו 3 דברים שאתם מעריכים בחבר לקבוצה או ביריב. שתפו לפחות אחד מהם עם אותו אדם!"},
{id:2,title:"חזקים ביחד",value:"עבודת צוות",icon:"\uD83E\uDD1D",badge:"\uD83E\uDD1D",badgeName:"עבודת צוות",
scenario:"באימון, חבר לקבוצה ממשיך לכדרר ולזרוק במקום למסור. שחקנים אחרים מתוסכלים, וחלקם הפסיקו לנסות בהתקפה.",
options:[
{text:"להתלונן בפני המאמן ולתת לו לטפל בזה",points:5,feedback:"זה בסדר לערב את המאמן, אבל לנסות לפתור את זה בעצמכם קודם מראה עבודת צוות אמיתית."},
{text:"להפסיק למסור לאותו שחקן כדי ללמד אותו לקח",points:0,feedback:"להילחם באנוכיות עם עוד אנוכיות רק מחליש את הקבוצה. שתי טעויות לא הופכות לצודקות!"},
{text:"לדבר עם חבר לקבוצה בפרטיות ולהציע דרכים לשתף את כולם",points:10,feedback:"מנהיגות מצוינת! שיחה מכבדת ופרטית מראה בגרות. אתם עוזרים לחבר שלכם לצמוח תוך שמירה על הקבוצה חזקה."}],
quiz:{question:"מה הדבר הכי חשוב בעבודת צוות?",options:[{text:"כל אחד תומך בקבוצה בדרכו שלו",correct:true},{text:"כולם קולעים אותו מספר נקודות",correct:false},{text:"השחקן הטוב ביותר מקבל את כל ההחלטות",correct:false}],explanation:"עבודת צוות פירושה שכולם תורמים את החוזקות שלהם!"},
homeTask:"חשבו על רגע שבו חבר לקבוצה עזר לכם להצליח. כתבו לו הודעת תודה קצרה!"},
{id:3,title:"קמים מהפסד",value:"חוסן",icon:"\uD83D\uDCAA",badge:"\uD83D\uDCAA",badgeName:"חוסן",
scenario:"הקבוצה שלכם הפסידה זה עתה את משחק האליפות בהפרש של 2 נקודות. הקבוצה היריבה חוגגת. המאמן שלכם מבקש מכולם לעמוד בשורה וללחוץ ידיים.",
options:[
{text:"ללחוץ ידיים, לברך את המנצחים ולספר לחברי הקבוצה שהם שיחקו מעולה",points:10,feedback:"בגרות מדהימה! להפסיד בכבוד זה אחד הדברים הקשים ביותר בספורט, והרגע הוכחתם שאתם מסוגלים."},
{text:"ללחוץ ידיים במהירות בלי להסתכל בעיניים",points:5,feedback:"עשיתם את הדבר הנכון בלחיצת הידיים, אבל לשים לב אמיתי בזה מראה אופי אמיתי."},
{text:"לסרב ללחוץ ידיים ולעזוב את המגרש",points:0,feedback:"לעזוב מראה ספורטיביות גרועה. הקבוצה השנייה הרוויחה את הניצחון ומגיע לה כבוד."}],
quiz:{question:"אחרי הפסד קשה, מה הדבר הכי טוב לעשות?",options:[{text:"להאשים את השופט בהחלטות גרועות",correct:false},{text:"לשכוח מזה לגמרי",correct:false},{text:"לחשוב על מה אפשר לשפר לפעם הבאה",correct:true}],explanation:"כל הפסד הוא שיעור! הספורטאים הטובים ביותר מוצאים דרכים להשתפר ולחזור חזקים יותר."},
homeTask:"כתבו על פעם שהפסדתם או נכשלתם. מה למדתם מזה? איך זה חיזק אתכם?"},
{id:4,title:"קחו אחריות על המשחק",value:"אחריות",icon:"\uD83C\uDFAF",badge:"\uD83C\uDFAF",badgeName:"אחריות",
scenario:"בדקה האחרונה, אתם מפספסים הטלה קלה והקבוצה מפסידה בנקודה אחת. בחדר ההלבשה, חבר מתוסכל אומר: הפסדנו בגללך.",
options:[
{text:"לענות בחזרה - אם אתה היית משחק הגנה יותר טובה, לא היינו במצב הזה!",points:0,feedback:"להאשים אחרים כשכואב לכם רק יוצר יותר קונפליקט. זריקה אחת שהוחמצה אף פעם לא מכריעה משחק שלם."},
{text:"לשתוק ולהתחמק מכולם עד סוף היום",points:5,feedback:"זה בסדר לצרוך מרחב, אבל להתחבא מהקבוצה יכול להחמיר את המצב. להתמודד ברגע הזה בכנות עוזר לכולם."},
{text:"להגיד - אני יודע, גם אני מאוכזב. אני אעבוד על ההטלות שלי באימון.",points:10,feedback:"וואו, זה דורש אומץ אמיתי! לקחת אחריות וגם להתחייב להשתפר מראה אופי אמיתי."}],
quiz:{question:"כשאתם עושים טעות במשחק, אתם צריכים:",options:[{text:"להעמיד פנים שזה לא קרה",correct:false},{text:"להכיר בזה, ללמוד מזה ולהתמקד במהלך הבא",correct:true},{text:"להשמיע את זה שוב ושוב במוח",correct:false}],explanation:"הכירו בזה, למדו את הלקח, שחררו והתמקדו קדימה!"},
homeTask:"כתבו משפט חיובי לעצמכם לאחר טעות. דוגמה: כולם מפספסים לפעמים. אני אקלע בפעם הבאה! אמרו את זה בקול רם 3 פעמים."},
{id:5,title:"הרימו אחרים",value:"עידוד",icon:"\u2B50",badge:"\u2B50",badgeName:"עידוד",
scenario:"שחקן חדש מצטרף לקבוצה באמצע העונה. באימונים הוא ממשיך לטעות - מאבד את הכדור, מחטיא זריקות, נראה עצבני. חלק מחברי הקבוצה נאנחים ומנידים בראש.",
options:[
{text:"לא להגיד כלום - זה התפקיד של המאמן לעזור לשחקנים חדשים",points:5,feedback:"המאמן יעזור, אבל חברי קבוצה שתומכים אחד בשני בונים קבוצה אמיתית."},
{text:"לגשת לשחקן החדש, להציג את עצמכם ולהציע להתאמן ביחד",points:10,feedback:"ככה נראה חבר צוות אמיתי! העידוד שלכם יכול לעזור לשחקן הזה להפוך למדהים."},
{text:"להצטרף לנאנחים - אם הוא לא מצליח לעמוד בקצב, זו הבעיה שלו",points:0,feedback:"כולם היו פעם חדשים - כולל אתם! לגרום למישהו להרגיש לא רצוי רק פוגע בקבוצה."}],
quiz:{question:"כשחבר לקבוצה מתקשה, התגובה הכי טובה היא:",options:[{text:"להתעלם לגמרי",correct:false},{text:"לספר להם את כל מה שהם עושים לא נכון",correct:false},{text:"להציע תמיכה ועידוד",correct:true}],explanation:"עידוד בונה ביטחון. להרים אחרים מרים את כל הקבוצה!"},
homeTask:"שלחו הודעת עידוד למישהו שאולי צריך את זה - חבר לקבוצה, חבר או בן משפחה."},
{id:6,title:"שמרו על קור רוח",value:"שליטה עצמית",icon:"\uD83E\uDDCA",badge:"\uD83E\uDDCA",badgeName:"שליטה עצמית",
scenario:"במהלך משחק אינטנסיבי, יריב ממשיך לפרובוקציות, אומר דברים כמו אתה לא יודע לזרוק ואתה איטי מדי. זה מתחיל להשפיע עליכם ולפגוע במשחק שלכם.",
options:[
{text:"להתעלם מהמילים, לקחת נשימה עמוקה ולתת למשחק שלכם לדבר",points:10,feedback:"שליטה עצמית מושלמת! כשאתם נשארים רגועים, היריב מאבד את הכוח שלו עליכם."},
{text:"להחזיר פרובוקציות חזק יותר כדי להראות שאתם לא פוחדים",points:0,feedback:"להחזיר פרובוקציות מסלים את המצב ומראה ליריב שהאסטרטגיה שלו עובדת."},
{text:"להתלונן בפני השופט על הפרובוקציות",points:5,feedback:"שופטים צריכים לטפל בהתנהגות לא ספורטיבית, אבל ללמוד להישאר ממוקדים למרות הפרעות זה מיומנות חיים!"}],
quiz:{question:"שליטה עצמית פירושה:",options:[{text:"להסתיר את כל הרגשות בפנים",correct:false},{text:"לבחור איך להגיב למצבים קשים",correct:true},{text:"אף פעם לא לכעוס על שום דבר",correct:false}],explanation:"זה נורמלי להרגיש כעס. שליטה עצמית זה לבחור את התגובה שלכם בחוכמה!"},
homeTask:"צרו תוכנית הרגעה לרגעים שאתם מתוסכלים: כתבו 3 צעדים. דוגמה: 1) קחו 3 נשימות עמוקות, 2) ספרו עד 5, 3) חשבו על משהו חיובי."},
{id:7,title:"קחו הובלה",value:"אחריותיות",icon:"\uD83C\uDFC5",badge:"\uD83C\uDFC5",badgeName:"אחריותיות",
scenario:"אתם קפטן הקבוצה. לפני משחק חשוב, שני חברי קבוצה מתווכחים בקול רם מי צריך להתחיל כפלייימייקר. המתח מתפשט לכל הקבוצה.",
options:[
{text:"לתמוך בשחקן שלדעתכם טוב יותר",points:0,feedback:"לקחת צד יוצר פילוג. מנהיג אמיתי מוצא מכנה משותף ומאחד את הקבוצה."},
{text:"להתעלם - זו לא הבעיה שלכם, תנו למאמן לטפל בזה",points:5,feedback:"המאמן יתערב, אבל כקפטן, חברי הקבוצה מסתכלים עליכם. לקחת הובלה ברגעים קשים זה מה שמנהיגים עושים."},
{text:"לאסוף את שני השחקנים, להקשיב לשני הצדדים ולהזכיר להם שכולכם באותה קבוצה",points:10,feedback:"זו מנהיגות אמיתית! בכך שהקשבתם והחזרתם את המיקוד לקבוצה, הוכחתם שמגיע לכם תפקיד הקפטן."}],
quiz:{question:"להיות אחראי פירושו:",options:[{text:"לעשות רק מה שאומרים לכם",correct:false},{text:"לוודא שמישהו אחר תמיד מקבל את האשמה",correct:false},{text:"לקחת בעלות על המעשים שלכם וההשפעה שלהם על אחרים",correct:true}],explanation:"אחריות פירושה לקחת בעלות על הבחירות שלכם ולחשוב איך אתם משפיעים על הקבוצה."},
homeTask:"צרו רשימת הכנה ליום משחק. כללו: ציוד, הכנה מנטלית, גישה חיובית, תמיכה בקבוצה. עקבו אחריה לפני המשחק הבא!"},
{id:8,title:"חשיבה של אלוף",value:"מנהיגות",icon:"\uD83D\uDC51",badge:"\uD83D\uDC51",badgeName:"מנהיגות",
scenario:"זהו המשחק האחרון של העונה. הקבוצה שלכם מפגרת ב-15 נקודות בהפסקה. חדר ההלבשה שקט. חלק מחברי הקבוצה מורידים את הראש. המאמן מסתכל עליכם.",
options:[
{text:"להישאר חיוביים במחשבה אבל לא להגיד כלום בקול",points:5,feedback:"חיוביות אישית זה נהדר, אבל הקבוצה שלכם צריכה לשמוע את זה עכשיו. קול אחד של אמונה יכול להצית קאמבק!"},
{text:"לשתוק - אין סיכוי לחזור מזה",points:0,feedback:"לוותר כשעוד נשאר זמן על השעון אומר שהמשחק באמת אבוד. חלק מהקאמבקים הגדולים ביותר התחילו כשמישהו סירב לוותר!"},
{text:"לקום ולעודד את הקבוצה: נשארו לנו שני רבעים! בואו ניאבק על כל נקודה!",points:10,feedback:"זה אלוף! לשחק עם לב עד הצפירה האחרונה מפריד בין שחקנים טובים למצוינים."}],
quiz:{question:"מנהיג אמיתי הוא מישהו ש:",options:[{text:"אף פעם לא עושה טעויות",correct:false},{text:"מעורר השראה באחרים לתת את המיטב",correct:true},{text:"תמיד השחקן הכי טוב בקבוצה",correct:false}],explanation:"מנהיגות היא לעורר השראה באחרים, להישאר חיוביים ולהוציא את המיטב מהקבוצה!"},
homeTask:"כתבו נאום מוטיבציה קצר (3-5 משפטים) לקבוצה שלכם ברגע קשה. תרגלו לומר אותו בקול רם עם אנרגיה!"}
];
var RANKS=[{min:0,name:"טירון",icon:"\uD83C\uDFC0"},{min:31,name:"כוכב עולה",icon:"\u2B50"},{min:61,name:"אול-סטאר",icon:"\uD83D\uDD25"},{min:101,name:"שחקן מצטיין",icon:"\uD83C\uDFC6"},{min:141,name:"אלוף",icon:"\uD83D\uDC51"}];
var COACH_PASSWORD="0704";

/* ── Multi-player storage (local + server sync) ── */
function serverKey(name,jersey){return name.trim().toLowerCase()+"_"+jersey}
function playerKey(name,jersey){return "coc_"+serverKey(name,jersey)}

function syncToServer(playerState){
    if(!playerState||!playerState.playerName||playerState.jerseyNumber===null)return;
    var key=serverKey(playerState.playerName,playerState.jerseyNumber);
    fetch("/api/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:key,data:playerState})}).catch(function(){});
}
function deleteFromServer(name,jersey){
    var key=serverKey(name,jersey);
    fetch("/api/player/"+encodeURIComponent(key),{method:"DELETE"}).catch(function(){});
}
function fetchPlayersFromServer(callback){
    fetch("/api/players").then(function(r){return r.json()}).then(function(players){callback(players)}).catch(function(){
        /* fallback to localStorage */
        var reg=getRegistry();
        var players=[];
        reg.forEach(function(p){var s=loadPlayerState(p.name,p.jersey);if(s&&s.started)players.push(s)});
        callback(players);
    });
}

function getRegistry(){try{var r=localStorage.getItem("coc_registry");if(r)return JSON.parse(r)}catch(e){}return []}
function setRegistry(arr){localStorage.setItem("coc_registry",JSON.stringify(arr))}
function registerPlayer(name,jersey){
    var reg=getRegistry();
    var exists=reg.some(function(p){return p.name===name&&p.jersey===jersey});
    if(!exists){reg.push({name:name,jersey:jersey});setRegistry(reg)}
}
function deletePlayer(name,jersey){
    var key=playerKey(name,jersey);
    localStorage.removeItem(key);
    var reg=getRegistry().filter(function(p){return !(p.name===name&&p.jersey===jersey)});
    setRegistry(reg);
    deleteFromServer(name,jersey);
}
function defaultState(){return{playerName:"",jerseyNumber:null,totalPoints:0,currentWeek:1,weekResults:{},taskResponses:{},started:false}}
function loadState(){
    try{
        var legacy=localStorage.getItem("courtOfChampions");
        if(legacy){
            var s=JSON.parse(legacy);
            if(s.started&&s.playerName&&s.jerseyNumber){
                var key=playerKey(s.playerName,s.jerseyNumber);
                localStorage.setItem(key,legacy);
                registerPlayer(s.playerName,s.jerseyNumber);
                localStorage.setItem("coc_last_player",JSON.stringify({name:s.playerName,jersey:s.jerseyNumber}));
                localStorage.removeItem("courtOfChampions");
                syncToServer(s);
                return s;
            }
            localStorage.removeItem("courtOfChampions");
        }
    }catch(e){}
    try{
        var last=localStorage.getItem("coc_last_player");
        if(last){
            var lp=JSON.parse(last);
            var ps=loadPlayerState(lp.name,lp.jersey);
            if(ps&&ps.started)return ps;
        }
    }catch(e){}
    return defaultState();
}
function loadPlayerState(name,jersey){
    try{var s=localStorage.getItem(playerKey(name,jersey));if(s)return JSON.parse(s)}catch(e){}
    return null;
}
function saveState(){
    if(!state.playerName||state.jerseyNumber===null)return;
    var key=playerKey(state.playerName,state.jerseyNumber);
    localStorage.setItem(key,JSON.stringify(state));
    registerPlayer(state.playerName,state.jerseyNumber);
    localStorage.setItem("coc_last_player",JSON.stringify({name:state.playerName,jersey:state.jerseyNumber}));
    syncToServer(state);
}
function getRank(pts){var rank=RANKS[0];for(var i=0;i<RANKS.length;i++){if(pts>=RANKS[i].min)rank=RANKS[i]}return rank}
function showScreen(id){document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active")});document.getElementById("screen-"+id).classList.add("active");window.scrollTo(0,0)}

var state=loadState();

/* ── Welcome / Jersey Input ── */
function initWelcome(){
    var jerseyInput=document.getElementById("jersey-number");
    var nameInput=document.getElementById("player-name");
    nameInput.value=state.playerName||"";
    if(state.jerseyNumber!==null)jerseyInput.value=state.jerseyNumber;
    nameInput.addEventListener("input",function(){
        state.playerName=nameInput.value.trim();
        checkStartReady();
    });
    jerseyInput.addEventListener("input",function(){
        var val=parseInt(jerseyInput.value);
        if(!isNaN(val)&&val>=0&&val<=99){state.jerseyNumber=val}
        else{state.jerseyNumber=null}
        checkStartReady();
    });
    document.getElementById("btn-start").addEventListener("click",function(){
        if(!state.playerName||state.jerseyNumber===null)return;
        var existing=loadPlayerState(state.playerName,state.jerseyNumber);
        if(existing){state=existing}
        state.started=true;saveState();showCourt();
    });
    document.getElementById("btn-coach-entry").addEventListener("click",function(){showCoachScreen()});
}
function checkStartReady(){document.getElementById("btn-start").disabled=!(state.playerName&&state.jerseyNumber!==null)}

/* ── Court ── */
function showCourt(){showScreen("court");updateHeader();renderCourtMap()}
function updateHeader(){
    var rank=getRank(state.totalPoints);
    document.getElementById("header-jersey").textContent="#"+state.jerseyNumber;
    document.getElementById("header-name").textContent=state.playerName;
    document.getElementById("header-rank").textContent=rank.icon+" "+rank.name;
    document.getElementById("header-points").textContent=state.totalPoints+" \u05E0\u05E7.";
}
function renderCourtMap(){
    var map=document.getElementById("court-map");
    map.innerHTML="";
    WEEKS.forEach(function(week,i){
        var weekNum=i+1;
        var isCompleted=state.weekResults[weekNum]!==undefined;
        var isCurrent=weekNum===state.currentWeek;
        var isLocked=weekNum>state.currentWeek;
        var station=document.createElement("div");
        station.className="court-station";
        if(isCompleted)station.classList.add("completed");
        else if(isCurrent)station.classList.add("current");
        else station.classList.add("locked");
        var circle=document.createElement("div");
        circle.className="station-circle";
        circle.textContent=isCompleted?"\u2713":weekNum;
        var label=document.createElement("div");
        label.className="station-label";
        label.textContent=week.title;
        station.appendChild(circle);
        station.appendChild(label);
        if(!isLocked){station.addEventListener("click",function(){
            if(isCompleted)showWeekSummary(weekNum);
            else startChallenge(weekNum);
        })}
        map.appendChild(station);
    });
    var allDone=state.currentWeek>8;
    var trophy=document.createElement("div");
    trophy.className="court-station"+(allDone?" trophy":" locked");
    var tC=document.createElement("div");
    tC.className="station-circle";
    tC.textContent="\uD83C\uDFC6";
    var tL=document.createElement("div");
    tL.className="station-label";
    tL.textContent="\u05D0\u05DC\u05D5\u05E3!";
    trophy.appendChild(tC);trophy.appendChild(tL);
    if(allDone)trophy.addEventListener("click",function(){showFinale()});
    map.appendChild(trophy);
}

/* ── Challenge ── */
var currentWeekData=null;var weekPoints=0,scenarioPoints=0,quizPoints=0,taskPoints=0;var chosenScenarioIdx=null;
function startChallenge(weekNum){
    currentWeekData=WEEKS[weekNum-1];
    weekPoints=0;scenarioPoints=0;quizPoints=0;taskPoints=0;chosenScenarioIdx=null;
    showScreen("challenge");
    document.getElementById("challenge-week").textContent="\u05E9\u05DC\u05D1 "+weekNum;
    document.getElementById("challenge-points").textContent=state.totalPoints+" \u05E0\u05E7.";
    document.getElementById("challenge-badge").textContent=currentWeekData.icon;
    document.getElementById("challenge-title").textContent=currentWeekData.title;
    document.getElementById("challenge-value").textContent="\u05E2\u05E8\u05DA: "+currentWeekData.value;
    document.getElementById("scenario-text").textContent=currentWeekData.scenario;
    var container=document.getElementById("options-container");
    container.innerHTML="";
    document.getElementById("feedback-box").classList.add("hidden");
    var letters=["\u05D0","\u05D1","\u05D2"];
    currentWeekData.options.forEach(function(opt,i){
        var btn=document.createElement("button");
        btn.className="option-btn";
        var span=document.createElement("span");
        span.className="option-letter";
        span.textContent=letters[i];
        btn.appendChild(span);
        btn.appendChild(document.createTextNode(" "+opt.text));
        btn.addEventListener("click",function(){selectScenarioOption(i)});
        container.appendChild(btn);
    });
}
function selectScenarioOption(idx){
    var opt=currentWeekData.options[idx];
    scenarioPoints=opt.points;
    chosenScenarioIdx=idx;
    weekPoints+=scenarioPoints;
    document.querySelectorAll("#options-container .option-btn").forEach(function(btn,i){
        btn.classList.add("disabled");
        btn.style.pointerEvents="none";
        if(i===idx){
            if(opt.points===10)btn.classList.add("selected-best");
            else if(opt.points===5)btn.classList.add("selected-ok");
            else btn.classList.add("selected-bad");
        }
    });
    var fb=document.getElementById("feedback-box");
    fb.classList.remove("hidden");
    document.getElementById("feedback-icon").textContent=opt.points===10?"\uD83C\uDF1F":opt.points===5?"\uD83E\uDD14":"\uD83D\uDE1E";
    document.getElementById("feedback-text").textContent=opt.feedback;
    var ptsEl=document.getElementById("feedback-points");
    ptsEl.textContent="+"+opt.points+" \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA";
    ptsEl.className="feedback-points pts-"+opt.points;
}
document.getElementById("btn-next-step").addEventListener("click",function(){showQuiz()});

/* ── Quiz ── */
function showQuiz(){
    showScreen("quiz");
    document.getElementById("quiz-week").textContent="\u05E9\u05DC\u05D1 "+currentWeekData.id;
    document.getElementById("quiz-points").textContent=(state.totalPoints+weekPoints)+" \u05E0\u05E7.";
    document.getElementById("quiz-question").textContent=currentWeekData.quiz.question;
    var container=document.getElementById("quiz-options");
    container.innerHTML="";
    document.getElementById("quiz-feedback-box").classList.add("hidden");
    var letters=["\u05D0","\u05D1","\u05D2"];
    currentWeekData.quiz.options.forEach(function(opt,i){
        var btn=document.createElement("button");
        btn.className="option-btn";
        var span=document.createElement("span");
        span.className="option-letter";
        span.textContent=letters[i];
        btn.appendChild(span);
        btn.appendChild(document.createTextNode(" "+opt.text));
        btn.addEventListener("click",function(){selectQuizOption(i)});
        container.appendChild(btn);
    });
}
function selectQuizOption(idx){
    var opt=currentWeekData.quiz.options[idx];
    var isCorrect=opt.correct;
    quizPoints=isCorrect?5:0;
    weekPoints+=quizPoints;
    document.querySelectorAll("#quiz-options .option-btn").forEach(function(btn,i){
        btn.classList.add("disabled");
        btn.style.pointerEvents="none";
        if(i===idx)btn.classList.add(isCorrect?"selected-best":"selected-bad");
        if(currentWeekData.quiz.options[i].correct&&i!==idx)btn.classList.add("selected-best");
    });
    var fb=document.getElementById("quiz-feedback-box");
    fb.classList.remove("hidden");
    document.getElementById("quiz-feedback-icon").textContent=isCorrect?"\uD83C\uDF89":"\uD83D\uDCA1";
    document.getElementById("quiz-feedback-text").textContent=currentWeekData.quiz.explanation;
    var ptsEl=document.getElementById("quiz-feedback-points");
    ptsEl.textContent=isCorrect?"+5 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05D5\u05E0\u05D5\u05E1!":"\u05D0\u05D9\u05DF \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05D5\u05E0\u05D5\u05E1 \u05D4\u05E4\u05E2\u05DD";
    ptsEl.className="feedback-points "+(isCorrect?"pts-10":"pts-0");
}
document.getElementById("btn-next-task").addEventListener("click",function(){showHomeTask()});

/* ── Home Task ── */
function showHomeTask(){
    showScreen("task");
    document.getElementById("task-week").textContent="\u05E9\u05DC\u05D1 "+currentWeekData.id;
    document.getElementById("task-points").textContent=(state.totalPoints+weekPoints)+" \u05E0\u05E7.";
    document.getElementById("task-description").textContent=currentWeekData.homeTask;
    document.getElementById("task-response").value=state.taskResponses[currentWeekData.id]||"";
}
document.getElementById("btn-complete-task").addEventListener("click",function(){
    var response=document.getElementById("task-response").value.trim();
    if(!response){
        document.getElementById("task-response").style.borderColor="var(--danger)";
        document.getElementById("task-response").setAttribute("placeholder","\u05DB\u05EA\u05D1\u05D5 \u05DE\u05E9\u05D4\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05E7\u05D1\u05DC \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA...");
        return;
    }
    taskPoints=5;weekPoints+=taskPoints;
    state.taskResponses[currentWeekData.id]=response;
    completeWeek();
});
document.getElementById("btn-skip-task").addEventListener("click",function(){taskPoints=0;completeWeek()});

function completeWeek(){
    state.weekResults[currentWeekData.id]={scenarioPoints:scenarioPoints,quizPoints:quizPoints,taskPoints:taskPoints,total:weekPoints,scenarioChoice:chosenScenarioIdx};
    state.totalPoints+=weekPoints;
    if(currentWeekData.id===state.currentWeek)state.currentWeek++;
    saveState();
    if(state.currentWeek>8&&Object.keys(state.weekResults).length===8){showFinale();return}
    showWeekComplete();
}

/* ── Week Complete ── */
function showWeekComplete(){
    showScreen("week-complete");
    launchConfetti("confetti-container");
    var summary=document.getElementById("week-summary");
    summary.innerHTML="";
    var rows=[
        {label:"\u05D1\u05D7\u05D9\u05E8\u05EA \u05EA\u05E8\u05D7\u05D9\u05E9",pts:scenarioPoints,max:10},
        {label:"\u05D7\u05D9\u05D3\u05D5\u05DF \u05D1\u05D5\u05E0\u05D5\u05E1",pts:quizPoints,max:5},
        {label:"\u05DE\u05E9\u05D9\u05DE\u05D4",pts:taskPoints,max:5}
    ];
    rows.forEach(function(row){
        var div=document.createElement("div");
        div.className="summary-row";
        var cls=row.pts===row.max?"good":row.pts>0?"ok":"bad";
        var s1=document.createElement("span");s1.textContent=row.label;
        var s2=document.createElement("span");s2.className="pts "+cls;s2.textContent="+"+row.pts+"/"+row.max;
        div.appendChild(s1);div.appendChild(s2);
        summary.appendChild(div);
    });
    var totalDiv=document.createElement("div");
    totalDiv.className="summary-row";
    totalDiv.style.fontWeight="700";
    totalDiv.style.borderTop="2px solid rgba(255,255,255,0.1)";
    totalDiv.style.paddingTop="0.75rem";
    var ts1=document.createElement("span");ts1.textContent="\u05E1\u05D4\"\u05DB \u05E9\u05DC\u05D1";
    var ts2=document.createElement("span");ts2.className="pts good";ts2.textContent="+"+weekPoints+"/20";
    totalDiv.appendChild(ts1);totalDiv.appendChild(ts2);
    summary.appendChild(totalDiv);
    document.getElementById("complete-total").textContent=state.totalPoints;
    var rank=getRank(state.totalPoints);
    document.getElementById("rank-update").innerHTML=rank.icon+" "+rank.name;
}
function showWeekSummary(weekNum){
    var result=state.weekResults[weekNum];
    if(!result)return;
    currentWeekData=WEEKS[weekNum-1];
    scenarioPoints=result.scenarioPoints;
    quizPoints=result.quizPoints;
    taskPoints=result.taskPoints;
    weekPoints=result.total;
    showWeekComplete();
}
document.getElementById("btn-back-to-court").addEventListener("click",function(){showCourt()});

/* ── Profile ── */
document.getElementById("btn-profile").addEventListener("click",function(){showProfile()});
document.getElementById("btn-profile-back").addEventListener("click",function(){showCourt()});
function showProfile(){
    showScreen("profile");
    var rank=getRank(state.totalPoints);
    document.getElementById("profile-avatar").textContent="#"+state.jerseyNumber;
    document.getElementById("profile-name").textContent=state.playerName;
    document.getElementById("profile-rank").textContent=rank.icon+" "+rank.name;
    document.getElementById("profile-points-big").textContent=state.totalPoints+" \u05E0\u05E7.";
    var completedWeeks=Object.keys(state.weekResults).length;
    var bestChoices=Object.values(state.weekResults).filter(function(r){return r.scenarioPoints===10}).length;
    var quizCorrect=Object.values(state.weekResults).filter(function(r){return r.quizPoints===5}).length;
    var tasksDone=Object.values(state.weekResults).filter(function(r){return r.taskPoints===5}).length;
    document.getElementById("stat-weeks").textContent=completedWeeks;
    document.getElementById("stat-scenarios").textContent=bestChoices;
    document.getElementById("stat-quizzes").textContent=quizCorrect;
    document.getElementById("stat-tasks").textContent=tasksDone;
    var badgesGrid=document.getElementById("badges-grid");
    badgesGrid.innerHTML="";
    WEEKS.forEach(function(week,i){
        var earned=state.weekResults[i+1]!==undefined;
        var div=document.createElement("div");
        div.className="badge-item "+(earned?"earned":"locked");
        var iconSpan=document.createElement("span");
        iconSpan.className="badge-icon";iconSpan.textContent=week.badge;
        var nameSpan=document.createElement("span");
        nameSpan.className="badge-name";nameSpan.textContent=week.badgeName;
        div.appendChild(iconSpan);div.appendChild(nameSpan);
        badgesGrid.appendChild(div);
    });
    var pct=Math.min((state.totalPoints/160)*100,100);
    document.getElementById("profile-progress").style.width=pct+"%";
    document.getElementById("progress-text").textContent=state.totalPoints+" / 160 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA";
    var responsesDiv=document.getElementById("saved-responses");
    responsesDiv.innerHTML="";
    var entries=Object.entries(state.taskResponses);
    if(entries.length===0){
        var p=document.createElement("p");p.className="no-responses";
        p.textContent="\u05D0\u05D9\u05DF \u05EA\u05D2\u05D5\u05D1\u05D5\u05EA \u05DC\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05E0\u05E9\u05DE\u05E8\u05D5 \u05E2\u05D3\u05D9\u05D9\u05DF.";
        responsesDiv.appendChild(p);
    }else{
        entries.forEach(function(entry){
            var weekId=entry[0],text=entry[1];
            var week=WEEKS[parseInt(weekId)-1];
            var item=document.createElement("div");
            item.className="response-item";
            var wDiv=document.createElement("div");
            wDiv.className="response-week";
            wDiv.textContent="\u05E9\u05DC\u05D1 "+weekId+": "+week.title;
            var tDiv=document.createElement("div");
            tDiv.className="response-text";
            tDiv.textContent=text;
            item.appendChild(wDiv);item.appendChild(tDiv);
            responsesDiv.appendChild(item);
        });
    }
}

/* ── Finale ── */
function showFinale(){
    showScreen("finale");
    launchConfetti("finale-confetti");
    var rank=getRank(state.totalPoints);
    document.getElementById("finale-score").textContent=state.totalPoints+" / 160 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA";
    document.getElementById("finale-rank").textContent="\u05D3\u05D9\u05E8\u05D5\u05D2 \u05E1\u05D5\u05E4\u05D9: "+rank.icon+" "+rank.name;
}
document.getElementById("btn-view-stats").addEventListener("click",function(){showProfile()});
document.getElementById("btn-play-again").addEventListener("click",function(){
    if(confirm("\u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05E9\u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DE\u05D7\u05D3\u05E9? \u05DB\u05DC \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05EA\u05D0\u05D1\u05D3!"))resetGame();
});
document.getElementById("btn-back-court").addEventListener("click",function(){showCourt()});
document.getElementById("btn-reset").addEventListener("click",function(){
    if(confirm("\u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05E9\u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D0\u05E4\u05E1 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA?"))resetGame();
});
function resetGame(){
    var oldName=state.playerName;
    var oldJersey=state.jerseyNumber;
    if(oldName&&oldJersey!==null){deletePlayer(oldName,oldJersey)}
    localStorage.removeItem("coc_last_player");
    state=defaultState();
    showScreen("welcome");
    initWelcome();
}

/* ── Coach Dashboard ── */
var coachReturnScreen="welcome";
var coachLoggedIn=false;
function showCoachScreen(){
    /* remember which screen we came from */
    var active=document.querySelector(".screen.active");
    if(active&&active.id!=="screen-coach")coachReturnScreen=active.id.replace("screen-","");
    showScreen("coach");
    if(coachLoggedIn){
        document.getElementById("coach-login").classList.add("hidden");
        document.getElementById("coach-dashboard").classList.remove("hidden");
        renderCoachDashboard();
    }else{
        document.getElementById("coach-login").classList.remove("hidden");
        document.getElementById("coach-dashboard").classList.add("hidden");
        document.getElementById("coach-error").classList.add("hidden");
        document.getElementById("coach-password").value="";
    }
}
document.getElementById("coach-fab").addEventListener("click",function(){showCoachScreen()});
document.getElementById("btn-coach-back").addEventListener("click",function(){showScreen(coachReturnScreen)});
document.getElementById("btn-coach-login").addEventListener("click",function(){attemptCoachLogin()});
document.getElementById("coach-password").addEventListener("keydown",function(e){if(e.key==="Enter")attemptCoachLogin()});
function attemptCoachLogin(){
    var pw=document.getElementById("coach-password").value;
    if(pw===COACH_PASSWORD){
        coachLoggedIn=true;
        document.getElementById("coach-login").classList.add("hidden");
        document.getElementById("coach-dashboard").classList.remove("hidden");
        renderCoachDashboard();
    }else{
        document.getElementById("coach-error").classList.remove("hidden");
    }
}
function renderCoachDashboard(){
    /* show loading state */
    var summaryEl=document.getElementById("coach-summary");
    summaryEl.innerHTML='<p style="color:var(--text-dim);text-align:center">\u05D8\u05D5\u05E2\u05DF...</p>';
    document.getElementById("coach-table-body").innerHTML="";
    /* fetch from server, fallback to localStorage */
    fetchPlayersFromServer(function(players){renderCoachTable(players)});
}
function renderCoachTable(players){
    players.sort(function(a,b){return b.totalPoints-a.totalPoints});
    var summaryEl=document.getElementById("coach-summary");
    summaryEl.innerHTML="";
    var totalPlayers=players.length;
    var avgPts=totalPlayers?Math.round(players.reduce(function(s,p){return s+p.totalPoints},0)/totalPlayers):0;
    var summaryData=[
        {num:totalPlayers,label:"\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD"},
        {num:avgPts,label:"\u05DE\u05DE\u05D5\u05E6\u05E2 \u05E0\u05E7."}
    ];
    summaryData.forEach(function(d){
        var div=document.createElement("div");div.className="coach-stat";
        var n=document.createElement("span");n.className="coach-stat-num";n.textContent=d.num;
        var l=document.createElement("span");l.className="coach-stat-label";l.textContent=d.label;
        div.appendChild(n);div.appendChild(l);
        summaryEl.appendChild(div);
    });
    /* table */
    var tbody=document.getElementById("coach-table-body");
    tbody.innerHTML="";
    var tableWrap=document.querySelector(".coach-table-wrap");
    var detailDiv=document.getElementById("coach-detail");
    tableWrap.classList.remove("hidden");
    detailDiv.classList.add("hidden");
    if(players.length===0){
        tableWrap.innerHTML='<p class="coach-no-players">\u05D0\u05D9\u05DF \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05E8\u05E9\u05D5\u05DE\u05D9\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF</p>';
        return;
    }
    players.forEach(function(p){
        var rank=getRank(p.totalPoints);
        var weeks=Object.keys(p.weekResults).length;
        var tr=document.createElement("tr");
        tr.innerHTML='<td class="coach-player-name">'+escapeHtml(p.playerName)+'</td>'
            +'<td class="coach-jersey">#'+p.jerseyNumber+'</td>'
            +'<td>'+weeks+'/8</td>'
            +'<td>'+p.totalPoints+'</td>'
            +'<td class="coach-rank-cell">'+rank.icon+' '+rank.name+'</td>'
            +'<td class="coach-delete-cell"><button title="\u05DE\u05D7\u05E7 \u05E9\u05D7\u05E7\u05DF">\u2716</button></td>';
        /* click row → detail (except delete button) */
        tr.addEventListener("click",function(e){
            if(e.target.closest(".coach-delete-cell"))return;
            showCoachDetail(p);
        });
        /* delete button */
        tr.querySelector(".coach-delete-cell button").addEventListener("click",function(e){
            e.stopPropagation();
            if(confirm("\u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC "+p.playerName+" #"+p.jerseyNumber+"?")){
                deletePlayer(p.playerName,p.jerseyNumber);
                renderCoachDashboard();
            }
        });
        tbody.appendChild(tr);
    });
}
document.getElementById("btn-detail-back").addEventListener("click",function(){
    document.querySelector(".coach-table-wrap").classList.remove("hidden");
    document.getElementById("coach-detail").classList.add("hidden");
});
function showCoachDetail(p){
    document.querySelector(".coach-table-wrap").classList.add("hidden");
    var detailDiv=document.getElementById("coach-detail");
    detailDiv.classList.remove("hidden");
    var content=document.getElementById("coach-detail-content");
    content.innerHTML="";
    var rank=getRank(p.totalPoints);
    /* header */
    var header=document.createElement("div");
    header.className="coach-detail-header";
    header.innerHTML='<h3>'+escapeHtml(p.playerName)+' #'+p.jerseyNumber+'</h3>'
        +'<div class="detail-meta">'+rank.icon+' '+rank.name+' | '+p.totalPoints+' \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA</div>';
    content.appendChild(header);
    /* per-level breakdown */
    for(var w=1;w<=8;w++){
        var result=p.weekResults[w];
        if(!result)continue;
        var week=WEEKS[w-1];
        var row=document.createElement("div");
        row.className="coach-week-row";
        var hdr=document.createElement("div");
        hdr.className="coach-week-header";
        var title=document.createElement("span");
        title.className="coach-week-title";
        title.textContent="\u05E9\u05DC\u05D1 "+w+": "+week.title;
        var pts=document.createElement("span");
        pts.className="coach-week-pts";
        pts.textContent=result.total+"/20 \u05E0\u05E7.";
        hdr.appendChild(title);hdr.appendChild(pts);
        row.appendChild(hdr);
        var detail=document.createElement("div");
        detail.className="coach-week-detail";
        var s1=document.createElement("span");
        s1.innerHTML="\u05EA\u05E8\u05D7\u05D9\u05E9 <span class='val'>"+result.scenarioPoints+"/10</span>";
        detail.appendChild(s1);
        var s2=document.createElement("span");
        s2.innerHTML="\u05D1\u05D5\u05E0\u05D5\u05E1 <span class='val'>"+result.quizPoints+"/5</span>";
        detail.appendChild(s2);
        var s3=document.createElement("span");
        s3.innerHTML="\u05DE\u05E9\u05D9\u05DE\u05D4 <span class='val'>"+result.taskPoints+"/5</span>";
        detail.appendChild(s3);
        if(result.scenarioChoice!==null&&result.scenarioChoice!==undefined){
            var choiceDiv=document.createElement("div");
            choiceDiv.className="coach-week-choice";
            choiceDiv.innerHTML="<strong>\u05D1\u05D7\u05D9\u05E8\u05D4:</strong> "+escapeHtml(week.options[result.scenarioChoice].text);
            detail.appendChild(choiceDiv);
        }
        if(p.taskResponses&&p.taskResponses[w]){
            var respDiv=document.createElement("div");
            respDiv.className="coach-week-response";
            respDiv.textContent="\u05EA\u05D2\u05D5\u05D1\u05D4: "+p.taskResponses[w];
            detail.appendChild(respDiv);
        }
        row.appendChild(detail);
        content.appendChild(row);
    }
    var done=Object.keys(p.weekResults).length;
    if(done<8){
        var note=document.createElement("p");
        note.style.cssText="text-align:center;color:var(--text-dim);margin-top:1rem;font-size:.9rem";
        note.textContent=(8-done)+" \u05E9\u05DC\u05D1\u05D9\u05DD \u05E0\u05D5\u05EA\u05E8\u05D5 \u05DC\u05D4\u05E9\u05DC\u05DE\u05D4";
        content.appendChild(note);
    }
    /* delete button at bottom */
    var delBtn=document.createElement("button");
    delBtn.className="coach-delete-btn";
    delBtn.textContent="\u05DE\u05D7\u05E7 \u05E9\u05D7\u05E7\u05DF";
    delBtn.addEventListener("click",function(){
        if(confirm("\u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC "+p.playerName+" #"+p.jerseyNumber+"?")){
            deletePlayer(p.playerName,p.jerseyNumber);
            document.querySelector(".coach-table-wrap").classList.remove("hidden");
            detailDiv.classList.add("hidden");
            renderCoachDashboard();
        }
    });
    content.appendChild(delBtn);
}

/* ── Utilities ── */
function launchConfetti(containerId){
    var container=document.getElementById(containerId);
    container.innerHTML="";
    var colors=["#FF6B35","#FFD700","#00C853","#2196F3","#FF1744","#E040FB"];
    for(var i=0;i<50;i++){
        var piece=document.createElement("div");
        piece.className="confetti-piece";
        piece.style.left=Math.random()*100+"%";
        piece.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
        piece.style.animationDuration=(Math.random()*2+1.5)+"s";
        piece.style.animationDelay=Math.random()*1+"s";
        piece.style.width=(Math.random()*8+6)+"px";
        piece.style.height=(Math.random()*8+6)+"px";
        piece.style.borderRadius=Math.random()>0.5?"50%":"2px";
        container.appendChild(piece);
    }
    setTimeout(function(){container.innerHTML=""},4000);
}
function escapeHtml(str){var div=document.createElement("div");div.textContent=str;return div.innerHTML}

/* ── Init ── */
function init(){
    initWelcome();
    if(state.started&&state.playerName&&state.jerseyNumber!==null){
        showCourt();
    }
}
init();
