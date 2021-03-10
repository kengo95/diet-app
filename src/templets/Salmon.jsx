import React, { useCallback, useState } from "react";
import { useDispatch} from "react-redux";
import { FoodSumAdd} from "../reducers/foodSum/actions"
import { TextInput, PrimaryButton, DenseTable } from "../components/UIkid/index"
import { push } from "connected-react-router"
import SalmonImg from "../assets/img/salmon.png"
import "../assets/css/style.css"
import "../assets/css/components.css"
const Salmon = () => {
  const dispatch = useDispatch()
  const [number, setNumber] = useState('');
  const [salmonType, setSalmonType] = useState(false);
  const salmonName ='鮭';
  const [salmonVal, setSalmonVal] = useState(100);
  const [salmonKal, setSalmonKal] = useState(128);
  const [salmonProtein, setSalmonProtein] = useState(22.5);
  const [salmonFat, setSalmonFat] = useState(5);
  const [salmonCarbo, setSalmonCarbo] = useState(0);
  const onChangeNumber = useCallback((event) => setNumber(event.target.value), [setNumber]);
  const onClickReset=()=>{
    return(
      setSalmonType(!salmonType),
      setSalmonVal(100),
      setSalmonKal(128),
      setSalmonProtein(22.5),
      setSalmonFat(5),
      setSalmonCarbo(0),
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
      setSalmonType(!salmonType),
      setSalmonVal(salmonVal*number),
      setSalmonKal(salmonKal*number),
      setSalmonProtein(salmonProtein*number),
      setSalmonFat(salmonFat*number),
      setSalmonCarbo(salmonCarbo*number),
      setNumber('')
    )
  }
  const onClickAdd =()=>{
    return(
      dispatch (FoodSumAdd(SalmonState)),
      onClickReset()
    )
  }
  const SalmonState={
    name:salmonName,
    val:salmonVal,
    kal:salmonKal,
    protein:salmonProtein,
    fat:salmonFat,
    carbo:salmonCarbo
  }
  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"><h1>{salmonName}</h1></div>
        <div className="header-home-img"><img src={SalmonImg} alt="鶏肉の写真" /></div>
      </header>
      <main className="main-home">
        <div className="main-home-container">
          <div className="main-home-left">
            {!salmonType && <TextInput
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
          {salmonType &&  <PrimaryButton class="primaty-button"
            label={"リセット"}
            onClick={() => onClickReset()}
          />}
        </div>
        <DenseTable val={salmonVal} name={salmonName} kal={salmonKal} fat={salmonFat} carbo={salmonCarbo} protein={salmonProtein} />
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

export default Salmon;