import React, { useCallback, useState } from "react";
import { useDispatch} from "react-redux";
import { FoodSumAdd} from "../reducers/foodSum/actions"
import { TextInput, PrimaryButton, DenseTable } from "../components/UIkid/index"
import { push } from "connected-react-router"
import ChikenImg from "../assets/img/chiken.png"
import "../assets/css/style.css"
import "../assets/css/components.css"
const Chiken = () => {
  const dispatch = useDispatch()
  const [number, setNumber] = useState('');
  const [chikenType, setChikenType] = useState(false);
  const chikenName = '胸肉';
  const [chikenVal, setChikenVal] = useState(100);
  const [chikenKal, setChikenKal] = useState(108);
  const [chikenProtein, setChikenProtein] = useState(22);
  const [chikenFat, setChikenFat] = useState(1.5);
  const [chikenCarbo, setChikenCarbo] = useState(0);
  const onChangeNumber = useCallback((event) => setNumber(event.target.value), [setNumber]);
  const onClickReset=()=>{
    return(
      setChikenType(!chikenType),
      setChikenVal(100),
      setChikenKal(108),
      setChikenProtein(22),
      setChikenFat(1.5),
      setChikenCarbo(0),
      setNumber('')
    )
  }
  const chenge = () => {
    return (
      onClickReset(),
      dispatch(push("/"))
    )
  }
  const onClickCalk = () => {
    return (
      setChikenType(!chikenType),
      setChikenVal(chikenVal*number),
      setChikenKal(chikenKal*number),
      setChikenProtein(chikenProtein*number),
      setChikenFat(chikenFat*number),
      setChikenCarbo(chikenCarbo*number),
      setNumber('')
    )
  }
  const onClickAdd =()=>{
    return(
      dispatch (FoodSumAdd(ChikenState)),
      onClickReset()
    )
  }
  const ChikenState={
    name:chikenName,
    val:chikenVal,
    kal:chikenKal,
    protein:chikenProtein,
    fat:chikenFat,
    carbo:chikenCarbo
  }
  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"><h1>{chikenName}</h1></div>
        <div className="header-home-img"><img src={ChikenImg} alt="鶏肉の写真" /></div>
      </header>
      <main className="main-home">
        <div className="main-home-container">
          <div className="main-home-left">
            {!chikenType && <TextInput
              fullWidth={true} label={"何100g（半角数字のみ）"} margin="dense" multiline={false} required={true}
              rows={1} value={number} type={"number"} onChange={onChangeNumber}
            />
            }
          </div>
          <div className="main-home-right">
            {number.match(/^[-]?([1-9]\d*|0)(\.\d+)?$/) && <PrimaryButton class="primaty-button"
              label={"計算する"}
              onClick={() => onClickCalk()}
            />}
          </div>
        </div>
        <div className="main-home-reset">
          {chikenType &&  <PrimaryButton class="primaty-button"
            label={"リセット"}
            onClick={() => onClickReset()}
          />}
        </div>
        <DenseTable val={chikenVal} name={chikenName} kal={chikenKal} fat={chikenFat} carbo={chikenCarbo} protein={chikenProtein} />
      </main>
        <footer>
          <div className="footer-home-conteiner">
            <div className="footer-right">
              <PrimaryButton class="primaty-button" label={"戻る"} onClick={() => chenge()} />
            </div>
            <div className="footer-left">
              <PrimaryButton class="primaty-button" label={"追加"} onClick={() =>onClickAdd()} />
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Chiken;