import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {prevColors} from '@assets/colors';
import {Pretendard} from '@assets/fonts';

type Props = {
  onSharePressed: () => void;
};

const TestShareButton = ({onSharePressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 140,
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        onPress={onSharePressed}
        style={{
          height: 56,
          backgroundColor: prevColors.MAIN,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={[
            Pretendard.Bold,
            {
              fontSize: 16,
              color: prevColors.BLACK200000,
            },
          ]}>
          공유하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestShareButton;
