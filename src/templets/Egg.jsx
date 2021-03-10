import React, { useCallback, useState } from "react";
import { useDispatch} from "react-redux";
import { FoodSumAdd} from "../reducers/foodSum/actions"
import { TextInput, PrimaryButton, DenseTable } from "../components/UIkid/index"
import { push } from "connected-react-router"
import EggImg from "../assets/img/egg.png"
import "../assets/css/style.css"
import "../assets/css/components.css"
const Egg = () => {
  const dispatch = useDispatch()
  const [number, setNumber] = useState('');
  const [eggType, setEggType] = useState(false);
  const eggName= '卵';
  const [eggVal, setEggVal] = useState(100);
  const [eggKal, setEggKal] = useState(151);
  const [eggProtein, setEggProtein] = useState(12);
  const [eggFat, setEggFat] = useState(10.5);
  const [eggCarbo, setEggCarbo] = useState(0);
  const onChangeNumber = useCallback((event) => setNumber(event.target.value), [setNumber]);
  const onClickReset=()=>{
    return(
      setEggType(!eggType),
      setEggVal(100),
      setEggKal(151),
      setEggProtein(12),
      setEggFat(10.5),
      setEggCarbo(0),
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
      setEggType(!eggType),
      setEggVal(eggVal*number),
      setEggKal(eggKal*number),
      setEggProtein(eggProtein*number),
      setEggFat(eggFat*number),
      setEggCarbo(eggCarbo*number),
      setNumber('')
    )
  }
  const onClickAdd =()=>{
    return(
      dispatch (FoodSumAdd(EggState)),
      onClickReset()
    )
  }
  const EggState={
    name:eggName,
    val:eggVal,
    kal:eggKal,
    protein:eggProtein,
    fat:eggFat,
    carbo:eggCarbo
  }
  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"><h1>{eggName}</h1></div>
        <div className="header-home-img"><img src={EggImg} alt="鶏肉の写真" /></div>
      </header>
      <main className="main-home">
        <div className="main-home-container">
          <div className="main-home-left">
            {!eggType && <TextInput
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
          {eggType &&  <PrimaryButton class="primaty-button"
            label={"リセット"}
            onClick={() => onClickReset()}
          />}
        </div>
        <DenseTable val={eggVal} name={eggName} kal={eggKal} fat={eggFat} carbo={eggCarbo} protein={eggProtein} />
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

export default Egg;