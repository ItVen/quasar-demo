
enum Color{
    offline = 'primary',
    online = 'info',
    error = 'negative',
}
enum Show{
    pro = 'invisible',
    end = 'hidden'
}

enum Icon{
    online = 'ion-radio-button-on',
    offline = 'ion-radio-button-off',
    success = 'ion-checkmark-circle-outline',
    fiale = 'ion-close-circle-outline'
}
interface Data {
    text: string,
    icon: string,
    color: string,
    show: string,
    showEnd: string,
    icon_end: string,
    colorEnd: string,
}

function getStateIcon(value: number, state: boolean):string{
    if(value>0) if(state) return Icon.online
    return Icon.offline;
}

function getEndIcon(state: boolean):string{
    if(state) return Icon.success
    return Icon.fiale;
}


function getColor(value: number, state: boolean):string{
     if(value>=100) {
         if(state) return Color.online
         return Color.error
     }
    return Color.offline;
}

function getShowProgress(value: number):string{
     if(value>=100) return Show.end
     if(value>0) return ''
    return Show.pro;
}

function getShowEnd(value: number):string{
     if(value<100) return Show.end
     return ''
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
        icon_end: getEndIcon(state),
        colorEnd: getColor(value, state)
    }
}
