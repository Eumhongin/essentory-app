import {View, Text, TextInput, StyleProp, ViewStyle} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import TextInputComponent from '../TextInputComponent';

type Props = {
  // 에러 상태 여부
  isError?: boolean;
  // 컨테이너 스타일
  containerStyle?: StyleProp<ViewStyle>;
};

const TextInputComponentContainer = ({isError, containerStyle}: Props) => {
  const inputRef = useRef<TextInput>(null);

  // 삭제버튼 보이기 유무
  const [isDeleteBtnShow, setIsDeleteBtnShow] = useState(false);

  // TextInput Focus 유무
  const [isFocused, setIsFocused] = useState(false);

  /**
   * @description TextInput 삭제버튼 클릭시 동작하는 함수
   */
  const onDeletePressed = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.setNativeProps({
        text: '',
      });
      setIsDeleteBtnShow(false);
      return;
    }
  }, [inputRef]);

  /**
   * @description TextInput입력값에 따라 삭제버튼 보임여부 처리 로직 함수
   */
  const deleteBtnShowLogic = useCallback((text: string) => {
    if (text.length !== 0) {
      setIsDeleteBtnShow(true);
      return;
    }

    setIsDeleteBtnShow(false);
  }, []);

  /**
   * @description TextInput입력 이벤트 감지 함수
   */
  const onTextChanged = useCallback(
    (txt: string) => {
      const value = txt;

      deleteBtnShowLogic(value);
    },
    [deleteBtnShowLogic],
  );

  /**
   * @description TextInput Focused 상태 함수
   */
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  /**
   * @description TextInput Blur 상태 함수
   */
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TextInputComponent
      // must need properties
      inputRef={inputRef}
      isFocused={isFocused}
      isDeleteBtnShow={isDeleteBtnShow}
      onFocus={onFocus}
      onBlur={onBlur}
      onTextChanged={onTextChanged}
      onDeletePressed={onDeletePressed}
      // outside properties
      isError={isError}
      containerStyle={containerStyle}
    />
  );
};

export default TextInputComponentContainer;
