import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
//import * as Emplid from '../utils/Emplid';
/* import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogFlowConfig } from '../utils/dialogFlowConfig'; */
import { styles } from '../theme/loginTheme';

const chatBotScreen = () => {



    let lastMsgBot = 0;
    let count = 0;
    let defaultRequest = {
        tipoLicencia: {
            tipo: ' ',
            descr: ' '
        },
        fechaInicio: '--/--/----',
        fechaFin: '--/--/----'
    };


    let newRequest = {
        tipoLicencia: {
            tipo: ' ',
            descr: ' '
        },
        fechaInicio: '--/--/----',
        fechaFin: '--/--/----'
    };

    const [messages, setMessages] = useState([]);

    const BOT = {
        _id: 2,
        name: 'React Native',
        avatar: 'https://cdn1.iconfinder.com/data/icons/social-media-glossy/512/45-reddit_social-512.png',
    }

    let mesaggesText = [
        /* opciones principales */
        { id: 0, text: `Hola! Soy tu asistente.\nVoy a ayudarte mediante las opciones disponibles:\nA: ¿Qué es PeopleSoft?\nB: Consultas sobre la App.\nC: Acciones.\n\nPara seleccionar una opción, podes responder con A, B o C.` },
        { id: 1, text: `PeopleSoft fue una compañía que suministraba software de Planificación de Recursos Empresariales, gestión de Recursos Humanos, gestión de las Relaciones con los Clientes  y Gestión de Nómina a grandes empresas.\nFundada en 1987 por Dave Duffield y Ken Morris, y con sede en Pleasanton, California, los inicios de PeopleSoft comienzan con una idea de Duffield sobre la versión Cliente-Servidor (en aquel entonces un concepto nuevo) de Integral un paquete de gestión de Recursos Humanos popular para grandes arquitecturas. Cuando Integral declinó seguir desarrollando la aplicación, permitió a Duffield lograr su sueño, PeopleSoft había nacido. En enero de 2005, PeopleSoft fue adquirida por Oracle Corporation y dejó de ser una compañía independiente.\n\nPodes responder con cualquier carácter para volver a las opciones!` },
        { id: 2, text: `A: Que es PeopleSoft?\nB: Consultas sobre la App.\nC: Acciones` },
        /* consultas app */
        { id: 3, text: `A: ¿Cómo cambiar mi domicilio?\nB: ¿Dónde puedo consultar mis datos personales?\nC: ¿Cómo gestiono mis licencias solicitadas?\n\nPara volver a las opciones principales, responde con: Volver` },
        { id: 4, text: `Para cambiar el domicilio, debes ir a la parte inferior de la pantalla donde se ubican los tres íconos, tenes que seleccionar el que tenga forma de Nube, luego, saldrán opciones en forma de cuadros desplegados en la pantalla.\nSeleccionas el cuadro con el nombre \'Cambio de Domicilio\', al ingresar, se mostrará tu domicilio actual cargado en el sistema, podes cambiar cada dato que salga en la pantalla y presionar el botón \'Enviar\' para poder actualizar tu domicilio en el sistema.\n\nPodes responder con cualquier carácter para volver a las opciones.` },
        { id: 5, text: `Para consultar tus datos personales, debes ir a la parte inferior de la pantalla donde se ubican los tres íconos, tenes que seleccionar el que tenga forma de Nube, luego, saldrán opciones en forma de cuadros desplegados en la pantalla.\nSeleccionas el cuadro con el nombre \'Mis Datos\'. \nUna vez allí, podes visualizar tus datos personales mediante la solapa con íconos, estos representan: tus datos personales, tu domicilio actual y tus datos laborales.\n\nPodes responder con cualquier carácter para volver a las opciones.` },
        { id: 6, text: `Para gestionar tus licencias, debes ir a la parte inferior de la pantalla donde se ubican los tres íconos, tenes que seleccionar el que tenga forma de Nube, luego, saldrán opciones en forma de cuadros desplegados en la pantalla.\nAllí se mostrarán tres cuadros con el nombre: \'Mis Solicitudes\', \'Nueva Solicitud\' y \'Aprobaciones\'.\nEn \'Mis Solicitudes\' podes ver todas tus licencias solicitadas e ingresar una por una para ver sus detalles.\n En \'Nueva Solicitud\' vas a poder solicitar una nueva licencia, ingresando el tipo de novedad, y las fechas que estará ausente.\nEn \'Aprobaciones\', si usted tiene empleados a cargo, visualizará una lista de solicitudes que generaron sus empleados, y podrá aprobarlas o rechazarlas.\n\nPodes responder con cualquier carácter para volver a las opciones.` },
        /* acciones app */
        { id: 7, text: `A: Solicitar una nueva licencia.\n\nPara volver a las opciones principales, responde con: Volver` },
        /* nueva licencia */
        { id: 8, text: `Por favor, seleccione el tipo de licencia:\n\nA: Vacaciones.\nB: Mudanza.\nC: Examen.\n\nPara anular el pedido, podes responder con: Cancelar` },
        { id: 9, text: `Por favor, para definir la fecha de inicio de la licencia, hágalo con el formato númerico DD/MM/YYYY (ej.: 25/04/2021)\n\nPara anular el pedido, podes responder con: Cancelar` },
        { id: 10, text: `Por favor, para definir la fecha de fin de la licencia, hágalo con el formato númerico DD/MM/YYYY (ej.: 25/04/2021)\n\nPara anular el pedido, podes responder con: Cancelar` },
        { id: 11, text: `Por favor, para confirmar y enviar la solicitud, responda con: Ok, o para anular: Cancelar` },
        { id: 12, text: `Listo! La solicitud fue realizada, podrá observarlo en Menú Cloud en el cuadro \'Mis Solicitudes\'.\n\nPodes responder con cualquier carácter para volver a las opciones.` }

    ];

    useEffect(() => {
        if (count === 0) {
            count += 1;
            lastMsgBot = mesaggesText[count - 1].id;
            setMessages([
                {
                    _id: 1,
                    text: mesaggesText[count - 1].text,
                    createdAt: new Date(),
                    user: BOT
                },
            ]);

        }
    }, []);

    /*  useEffect(() => {
         Dialogflow_V2.setConfiguration(
             dialogFlowConfig.client_email,
             dialogFlowConfig.private_key,
             Dialogflow_V2.LANG_SPANISH,
             dialogFlowConfig.project_id
         )
     }, [])
 
     const sendBotResponse = text => {
         let msg = {
             _id: messages.length + 1,
             text,
             ccreatedAt: new Date(),
             user: BOT,
         };
 
         setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]))
     };
 
     const handleGoogleResponse = (result) => {
         let text = result.queryResult.fulfillmentMessages[0].text.text[0];
 
         sendBotResponse(text);
     }; */

    const fechaValida = (texto) => {
        let partes = /^(\d{1,2})[/](\d{1,2})[/](\d{3,4})$/.exec(texto);

        if (!partes) return false; //no coincide el regex

        //Obtener las partes
        let d = parseInt(partes[1], 10),
            m = parseInt(partes[2], 10),
            a = parseInt(partes[3], 10);

        //Validar manualmente
        if (!a || !m || m > 12 || !d) return false;

        let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        //Si es bisiesto, febrero tiene 29
        if (m == 2 && (a % 4 == 0 && a % 100 != 0) || a % 400 == 0)
            diasPorMes[1] = 29;

        //Que no tenga más días de los permitidos en el mes
        if (d > diasPorMes[m - 1]) return false;

        //Fecha válida
        return true;
    }

    const handleMessages = (msgResponse) => {

        let nextMsg;
        let text;
        let error = false;

        if (lastMsgBot === 0) {
            if (msgResponse.toUpperCase() === "A") {
                nextMsg = mesaggesText[1].id;
                text = mesaggesText[1].text;
            } else if (msgResponse.toUpperCase() === "B") {
                nextMsg = mesaggesText[3].id;
                text = mesaggesText[3].text;
            } else if (msgResponse.toUpperCase() === "C") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
            } else {
                error = true;
                text = "Debe responder con A, B o C.";
            }
        } else if (lastMsgBot === 1) {
            nextMsg = mesaggesText[2].id;
            text = mesaggesText[2].text;
        } else if (lastMsgBot === 2) {
            if (msgResponse.toUpperCase() === "A") {
                nextMsg = mesaggesText[1].id;
                text = mesaggesText[1].text;
            } else if (msgResponse.toUpperCase() === "B") {
                nextMsg = mesaggesText[3].id;
                text = mesaggesText[3].text;
            } else if (msgResponse.toUpperCase() === "C") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
            } else {
                error = true;
                text = "Debe responder con A, B, C.";
            }
        } else if (lastMsgBot === 3) {
            nextMsg = mesaggesText[2].id;
            text = mesaggesText[2].text;
            if (msgResponse.toUpperCase() === "A") {
                nextMsg = mesaggesText[4].id;
                text = mesaggesText[4].text;
            } else if (msgResponse.toUpperCase() === "B") {
                nextMsg = mesaggesText[5].id;
                text = mesaggesText[5].text;
            } else if (msgResponse.toUpperCase() === "C") {
                nextMsg = mesaggesText[6].id;
                text = mesaggesText[6].text;
            } else if (msgResponse.toUpperCase() === "VOLVER") {
                nextMsg = mesaggesText[2].id;
                text = mesaggesText[2].text;
            } else {
                error = true;
                text = "Debe responder con A, B, C o Volver";
            }
        } else if (lastMsgBot === 4) {
            nextMsg = mesaggesText[3].id;
            text = mesaggesText[3].text;
        } else if (lastMsgBot === 5) {
            nextMsg = mesaggesText[3].id;
            text = mesaggesText[3].text;
        } else if (lastMsgBot === 6) {
            nextMsg = mesaggesText[3].id;
            text = mesaggesText[3].text;
        } else if (lastMsgBot === 7) {
            newRequest = defaultRequest;
            if (msgResponse.toUpperCase() === "A") {
                nextMsg = mesaggesText[8].id;
                text = mesaggesText[8].text;
            } else if (msgResponse.toUpperCase() === "VOLVER") {
                nextMsg = mesaggesText[2].id;
                text = mesaggesText[2].text;
            } else {
                error = true;
                text = "Debe responder con A o Volver";
            }
        } else if (lastMsgBot === 8) {
            if (msgResponse.toUpperCase() === "A" || msgResponse.toUpperCase() === "B" || msgResponse.toUpperCase() === "C") {

                if (msgResponse.toUpperCase() === "A") {
                    newRequest.tipoLicencia.tipo = '01';
                    newRequest.tipoLicencia.descr = 'Vacaciones';
                } else if (msgResponse.toUpperCase() === "B") {
                    newRequest.tipoLicencia.tipo = '02';
                    newRequest.tipoLicencia.descr = 'Mudanza';
                } else if (msgResponse.toUpperCase() === "C") {
                    newRequest.tipoLicencia.tipo = '04';
                    newRequest.tipoLicencia.descr = 'Examen';
                }
                nextMsg = mesaggesText[9].id;
                text = mesaggesText[9].text;

            } else if (msgResponse.toUpperCase() === "CANCELAR") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
                newRequest = defaultRequest;
            } else {
                error = true;
                text = "Debe responder con A, B, C o Cancelar";
            }
        } else if (lastMsgBot === 9) {

            let valida;

            if (msgResponse.toUpperCase() === "CANCELAR") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
                newRequest = defaultRequest;
            } else {
                valida = fechaValida(msgResponse);

                if (valida === true) {
                    nextMsg = mesaggesText[10].id;
                    text = mesaggesText[10].text;
                    newRequest.fechaInicio = msgResponse;
                } else {
                    error = true;
                    text = "Debe ingresar una fecha válida o anular el pedido respondiendo con: Cancelar";
                }

            }
        } else if (lastMsgBot === 10) {

            let valida;

            if (msgResponse.toUpperCase() === "CANCELAR") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
                newRequest = defaultRequest;
            } else {
                valida = fechaValida(msgResponse);

                if (valida === true) {
                    nextMsg = mesaggesText[11].id;
                    text = mesaggesText[11].text;
                    newRequest.fechaFin = msgResponse;
                } else {
                    error = true;
                    text = "Debe ingresar una fecha válida o anular el pedido respondiendo con: Cancelar";
                }

            }
        } else if (lastMsgBot === 11) {
            if (msgResponse.toUpperCase() === "OK") {

                /* let myBody;
                myBody = "<?xml version=\"1.0\"?><NEW_REQUEST xmlns=\"http://xmlns.oracle.com/Enterprise/Tools/schemas/ICSA_APP.NEW_REQUEST.V1\"><empleado>" + Emplid.empleado + "</empleado><absTypeId>" + newRequest.tipoLicencia.tipo + "</absTypeId><dateStart>" + newRequest.fechaInicio + "</dateStart><dateEnd>" + newRequest.fechaFin + "</dateEnd></NEW_REQUEST>";

                fetch("http://201.234.130.156:8000/PSIGW/RESTListeningConnector/PSFT_HR/ICSA_OPS_NEW_REQ_V2.v1/?empleado=" + Emplid.empleado, {
                    method: 'POST',
                    body: myBody,
                    headers: {
                        "Content-Type": "text/xml"
                    }
                })
                    .then(response => response.json())
                    .then(data => {

                        nextMsg = mesaggesText[12].id;
                        text = mesaggesText[12].text;
                        newRequest = defaultRequest;

                        let msg = {
                            _id: count + 1,
                            text: text,
                            ccreatedAt: new Date(),
                            user: BOT,
                        };

                        setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]));
                        
                        count += 1;
                        if (error === false) {
                            lastMsgBot = nextMsg;
                        }

                    })
                    .catch(error => console.log(error)); */

            } else if (msgResponse.toUpperCase() === "CANCELAR") {
                nextMsg = mesaggesText[7].id;
                text = mesaggesText[7].text;
                newRequest = defaultRequest;
            } else {
                error = true;
                text = "Debe responder con: Ok, para confirmar, o con: Cancelar, para anular la solicitud.";
            }
        } else if (lastMsgBot === 12) {
            nextMsg = mesaggesText[7].id;
            text = mesaggesText[7].text;
        }

        if (lastMsgBot === 11) {

        } else {
            let msg = {
                _id: count + 1,
                text: text,
                ccreatedAt: new Date(),
                user: BOT,
            };

            setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]));

            count += 1;
            if (error === false) {
                lastMsgBot = nextMsg;
            }
        }
        console.log('lastMsgBot: ' + lastMsgBot);
    };

    const onSend = useCallback((messages = []) => {

        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

        handleMessages(messages[0].text);
        /* let message = messages[0].text;

        Dialogflow_V2.requestQuery(
            message,
            (result) => handleGoogleResponse(result),
            (error) => console.log(error)
        ) */

    }
        , []);

    /* const onQuickReply = 
        (quickReply) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, quickReply))

        let message = quickReply[0].value;

        Dialogflow_V2.requestQuery(
            message,
            (result) => handleGoogleResponse(result),
            (error) => console.log(error)
        )
    }; */

    return (
        <View style={styles2.screen}>
            <View styles={styles2.header} />
            <GiftedChat
                placeholder='Escribe un mensaje...'
                /* isTyping= {true} */
                messages={messages}
                onSend={messages => onSend(messages)}
                onQuickReply={quickReply => onQuickReply(quickReply)}
                user={{
                    _id: 1,
                }}
            />
        </View>

    );
}

const styles2 = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    header: {
        width: '100%',
        height: 40,
        backgroundColor: 'red'
    }
});


export default chatBotScreen;