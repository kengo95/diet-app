import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FoodSumAdd } from "../reducers/foodSum/actions"
import { TextInput, PrimaryButton, DenseTable } from "../components/UIkid/index"
import { push } from "connected-react-router"
import MeatImg from "../assets/img/meat.png"
import "../assets/css/style.css"
import "../assets/css/components.css"
const Meat = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const [number, setNumber] = useState('');
  const [meatType, setMeatType] = useState(false);
  const [meatName, setMeatName] = useState('牛肉');
  const [meatVal, setMeatVal] = useState(100);
  const [meatKal, setMeatKal] = useState(372);
  const [meatProtein, setMeatProtein] = useState(14.5);
  const [meatFat, setMeatFat] = useState(33);
  const [meatCarbo, setMeatCarbo] = useState(0.5);
  const onChangeNumber = useCallback((event) => setNumber(event.target.value), [setNumber]);
  const onClickReset = () => {
    return (
      setMeatType(!meatType),
      setMeatVal(100),
      setMeatKal(372),
      setMeatProtein(14.5),
      setMeatFat(33),
      setMeatCarbo(0.5),
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
      setMeatType(!meatType),
      setMeatVal(meatVal * number),
      setMeatKal(meatKal * number),
      setMeatProtein(meatProtein * number),
      setMeatFat(meatFat * number),
      setMeatCarbo(meatCarbo * number),
      setNumber('')
    )
  }
  const onClickAdd = () => {
    return (
      dispatch(FoodSumAdd(meatState)),
      onClickReset()
    )
  }
  const meatState = {
    name: meatName,
    val: meatVal,
    kal: meatKal,
    protein: meatProtein,
    fat: meatFat,
    carbo: meatCarbo
  }
  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"><h1>{meatName}</h1></div>
        <div className="header-home-img"><img src={MeatImg} alt="鶏肉の写真" /></div>
      </header>
      <main className="main-home">
        <div className="main-home-container">
          <div className="main-home-left">
            {!meatType && <TextInput
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
          {meatType && <PrimaryButton class="primaty-button"
            label={"リセット"}
            onClick={() => onClickReset()}
          />}
        </div>
        <DenseTable val={meatVal} name={meatName} kal={meatKal} fat={meatFat} carbo={meatCarbo} protein={meatProtein} />
      </main>
      <footer>
        <div className="footer-home-conteiner">
          <div className="footer-right">
            <PrimaryButton class="primaty-button" label={"戻る"} onClick={() => chenge()} />
          </div>
          <div className="footer-left">
            <PrimaryButton class="primaty-button" label={"追加"} onClick={() => onClickAdd()} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Meat;