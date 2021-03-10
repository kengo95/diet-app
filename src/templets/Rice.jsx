import React, { useCallback, useState } from "react";
import { useDispatch} from "react-redux";
import { FoodSumAdd} from "../reducers/foodSum/actions"
import { TextInput, PrimaryButton, DenseTable } from "../components/UIkid/index"
import { push } from "connected-react-router"
import RiceImg from "../assets/img/rice.png"
import "../assets/css/style.css"
import "../assets/css/components.css"
const Rice = () => {
  const dispatch = useDispatch()
  const [number, setNumber] = useState('');
  const [riceType, setRiceType] = useState(false);
  const riceName = '白米';
  const [riceVal, setRiceVal] = useState(100);
  const [riceKal, setRiceKal] = useState(168);
  const [riceProtein, setRiceProtein] = useState(2.5);
  const [riceFat, setRiceFat] = useState(0.5);
  const [riceCarbo, setRiceCarbo] = useState(37);
  const onChangeNumber = useCallback((event) => setNumber(event.target.value), [setNumber]);
  const onClickReset=()=>{
    return(
      setRiceType(!riceType),
      setRiceVal(100),
      setRiceKal(168),
      setRiceProtein(2.5),
      setRiceFat(0.5),
      setRiceCarbo(37),
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
      setRiceType(!riceType),
      setRiceVal(riceVal*number),
      setRiceKal(riceKal*number),
      setRiceProtein(riceProtein*number),
      setRiceFat(riceFat*number),
      setRiceCarbo(riceCarbo*number),
      setNumber('')
    )
  }
  const onClickAdd =()=>{
    return(
      dispatch (FoodSumAdd(riceState)),
      onClickReset()
    )
  }
  const riceState={
    name:riceName,
    val:riceVal,
    kal:riceKal,
    protein:riceProtein,
    fat:riceFat,
    carbo:riceCarbo
  }
  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"><h1>{riceName}</h1></div>
        <div className="header-home-img"><img src={RiceImg} alt="鶏肉の写真" /></div>
      </header>
      <main className="main-home">
        <div className="main-home-container">
          <div className="main-home-left">
            {!riceType && <TextInput
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
          {riceType &&  <PrimaryButton class="primaty-button"
            label={"リセット"}
            onClick={() => onClickReset()}
          />}
        </div>
        <DenseTable val={riceVal} name={riceName} kal={riceKal} fat={riceFat} carbo={riceCarbo} protein={riceProtein} />
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

export default Rice;