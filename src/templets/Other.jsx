import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Text, TextInput, OtherButton } from "../components/UIkid/index"
import { push } from "connected-react-router"
import { FoodSumAdd } from "../reducers/foodSum/actions"
import "../assets/css/style.css"
import "../assets/css/components.css"

const Other = () => {
  const dispatch = useDispatch();
  const [otherName, setOtherName] = useState('');
  const [otherVal, setOtherVal] = useState('');
  const [otherKal, setOtherKal] = useState('');
  const [otherProtein, setOtherProtein] = useState('');
  const [otherFat, setOtherFat] = useState('');
  const [otherCarbo, setOtherCarbo] = useState('');

  const onChengeName = useCallback((event) => setOtherName(event.target.value), [setOtherName]);
  const onChengeVal = useCallback((event) => setOtherVal(event.target.value), [setOtherVal]);
  const onChengeKal = useCallback((event) => setOtherKal(event.target.value), [setOtherKal]);
  const onChengeProtein = useCallback((event) => setOtherProtein(event.target.value), [setOtherProtein]);
  const onChengeFat = useCallback((event) => setOtherFat(event.target.value), [setOtherFat]);
  const onChengeCarbo = useCallback((event) => setOtherCarbo(event.target.value), [setOtherCarbo]);

  const otherState = {
    name: otherName,
    val: Number(otherVal),
    kal: Number(otherKal),
    protein: Number(otherProtein),
    fat: Number(otherFat),
    carbo: Number(otherCarbo)
  }
  const onClickReset = () => {
    return (
      setOtherName(""),
      setOtherVal("null"),
      setOtherKal("null"),
      setOtherProtein("null"),
      setOtherFat("null"),
      setOtherCarbo("null")
    )
  }
  const chenge = () => {
    return (
      onClickReset(),
      dispatch(push("/"))
    )
  }
  const onClickAdd = () => {
    return (
      dispatch(FoodSumAdd(otherState)),
      onClickReset()
    )
  }

  return (
    <div className="allClass">
      <header className="header-home">
        <div className="header-home-title"> <h1>追加</h1></div>
      </header>
      <main className="main-other">
        <div>
          <Text
            fullWidth={true} label={"名前"} margin="dense" multiline={false} required={true}
            rows={1} value={otherName} type={"text"} onChange={onChengeName}
          />
        </div>
        <div>
          <TextInput
            fullWidth={true} label={"何g（半角数字のみ）"} margin="dense" multiline={false} required={true}
            rows={1} value={otherVal} type={"number"} onChange={onChengeVal}
          />
        </div>
        <div>
          <TextInput
            fullWidth={true} label={"カロリー（半角数字のみ）"} margin="dense" multiline={false} required={true}
            rows={1} value={otherKal} type={"number"} onChange={onChengeKal}
          />
        </div>
        <div>
          <TextInput
            fullWidth={true} label={"タンパク質（半角数字のみ）"} margin="dense" multiline={false} required={true}
            rows={1} value={otherProtein} type={"number"} onChange={onChengeProtein}
          />
        </div>
        <div>
          <TextInput
            fullWidth={true} label={"脂質（半角数字のみ）"} margin="dense" multiline={false} required={true}
            rows={1} value={otherFat} type={"number"} onChange={onChengeFat}
          />
        </div>
        <div>
          <TextInput
            fullWidth={true} label={"炭水化物（半角数字のみ）"} margin="dense" multiline={false} required={true}
            rows={1} value={otherCarbo} type={"number"} onChange={onChengeCarbo}
          />
        </div>
      </main>
      <footer>
        <div className="main-other-footer">
          <div>
            <OtherButton label={"リセット"} onClick={() => onClickReset()}
            />
          </div>
          <div >
           {otherName && otherVal && otherKal && otherProtein && otherFat &&otherCarbo&& <OtherButton  label={"追加"} onClick={() => onClickAdd()} />}
          </div>
          <div>
            <OtherButton label={"戻る"} onClick={() => chenge()} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Other