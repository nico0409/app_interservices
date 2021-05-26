import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems:MenuItem[]=[{
    name:'Mesa de ayuda',
    icon:'chatbubble-ellipses-outline',
    components:'Animation101Scren'
},{
    name:'Mi Recibo de sueldo',
    icon:'man',
    components:'Animation102Scren'
},
{
    name:'Test Covid',
    icon:'git-commit-outline',
    components:'SwitchScreen'
},
{
    name:'Cambio de domicilio',
    icon:'flashlight-outline',
    components:'AlertScreen'
},
{
    name:'Datos Personales',
    icon:'document-text-outline',
    components:'TextImputScren'
},
{
    name:'Noticias',
    icon:'refresh-outline',
    components:'PullToRefreshScreen'
},{
    name:'Nuestras Oficinas',
    icon:'list-outline',
    components:'CustomSectionListScreen'
},
{
    name:'Home',
    icon:'copy-outline',
    components:'ModalScreen'
},
{
    name:'Configuraciones',
    icon:'download-outline',
    components:'InfiniteScrollScreen'
},
{
    name:'Reservar sala',
    icon:'flower-outline',
    components:'SlidesScreen'
},
{
    name:'Salir',
    icon:'flask-outline',
    components:'ChangeThemeScreen'
}



]
