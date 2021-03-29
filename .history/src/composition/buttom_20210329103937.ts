
enum Color{
    offline = 'primary',
    online = 'info',
    error = 'negative',
}
enum Show{
    progressOccupyHide = 'invisible',
    progressNotOccupyHide = 'hidden',
    progressShow = ''
}

enum Icon{
    online = 'ion-radio-button-on',
    offline = 'ion-radio-button-off',
    loginSuccess = 'ion-checkmark-circle-outline',
    loginFiale = 'ion-close-circle-outline'
}
interface Data {
    text: string,
    icon: string,
    color: string,
    show: string,
    showEnd: string,
    iconEnd: string,
    colorEnd: string,
}

function getStateIcon(value: number, state: boolean):string{
    if(value>0) if(state) return Icon.online
    return Icon.offline;
}

function getEndIcon(state: boolean):string{
    if(state) return Icon.loginSuccess
    return Icon.loginFiale;
}


function getColor(value: number, state: boolean):string{
     if(value>=100) {
         if(state) return Color.online
         return Color.error
     }
    return Color.offline;
}

function getShowProgress(value: number):string{
     if(value>=100) return Show.progressNotOccupyHide
     if(value>0) return Show.progressShow
    return Show.progressOccupyHide;
}

function getShowEnd(value: number):string{
     if(value<100) return Show.progressNotOccupyHide
     return Show.progressShow
}
function getContext(context: string):string{
     const txt: string[] = context.split('@');
     let text = txt[0].substr(0, 4);
     if (txt[1]) {
        text = text + '...@' + txt[1];
        return text
     }
     return context;
}

export function getData(value: number, state: boolean,context: string): Data{

    return {
        text:getContext(context),
        icon: getStateIcon(value, state),
        color: getColor(value, state),
        show: getShowProgress(value),
        showEnd: getShowEnd(value),
        iconEnd: getEndIcon(state),
        colorEnd: getColor(value, state)
    }
}
