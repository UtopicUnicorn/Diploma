import {StyleSheet} from "react-native";

export const itemStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    field:{
        margin: 10,
        borderWidth:1,
        borderColor:'#804EA7',
        padding:20,
    },
    sizeOptionsView:{
        marginTop:10,
        flexDirection:"row",

    },
    sizeOptions:{
        borderWidth:1,
        borderColor:'#804EA7',
        width:85,
        height:40,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,

    },
    input:{
        height:40,
        margin:'3%',
        borderWidth: 1,
        borderColor: '#804EA7',
        padding: 10,
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:180,
        height:30,
        marginLeft:10,
    },
    button:{
        flexDirection:'row',
        elevation: 2,
        height:30,
        width: 180,
        alignItems:'center',
        justifyContent: 'center',
    },
    chosenImgView:{
        marginTop: 30,
    },
    saveButtonView:{
        alignItems:"center",
        margin:20,
        marginTop:50,
    },
    saveButton:{
        alignItems:'center',
        justifyContent: 'center',
        height:40,
        width: 300,
        borderWidth:1,
    },
    item:{
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    itemText:{
        alignItems:'center',
        padding: 10,
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    chooseItemView:{
        marginTop:20,
        alignItems:'center',
        flexDirection: 'column',
    },
    chooseItemViewTop:{
        flexDirection: "row",
    },
    chooseItemViewBottom:{
        marginTop:10,
        flexDirection: "row",
    },
    chooseItemTypeButton:{
        marginLeft: 20,
        marginRight: 20,

    },
    chooseItemTypeButtonText:{
        fontSize: 19,
    },
    icon:{
        marginLeft: 20,
        marginRight: 20,
    },
    tinyLogo:{
        width: 30,
        height: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    itemOps:{
        alignItems:'center',
        borderWidth:1,
        borderColor: '#804EA7',
        padding: 10,
    },
})
