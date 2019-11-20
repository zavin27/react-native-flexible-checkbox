/**
 * Checkbox.js
 *
 *  Last Modified in 5/2/19 6:09 PM
 *
 *  @Author Zavin Hussein <Zavinhussein@gmail.com>
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  InteractionManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const hitSlop = {top: 8, bottom: 8, left: 8, right: 8};

export default function Checkbox({
  onChange,
  checked,
  indeterminate,
  touchableType,
  touchableProps,
  containerStyles,
  iconColor,
  shape,
  size,
}) {
  /**
   * returns 80% of the size props for the icon
   * @type {number}
   */
  // eslint-disable-next-line radix
  const iconSize = parseInt(size * 0.8);

  /**
   * Handles onPress - also checks for indeterminate values
   * @type {function}
   * @return {void}
   * @private
   */
  const _onPress = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      switch (checked) {
        case 'checked':
          onChange(indeterminate ? 'indeterminate' : 'unchecked');
          break;
        case 'indeterminate':
          onChange('unchecked');
          break;
        case 'unchecked':
          onChange('checked');
          break;
      }
    });
  }, [checked, onChange, indeterminate]);

  /**
   * Gets the main container essential styles
   * @type {function}
   * @return {{
   *    width: number,
   *    height: number,
   *    borderColor: string,
   *    backgroundColor: string,
   *    borderRadius: number
   * }}
   * @private
   */
  const _getContainerStyles = useCallback(
    () => ({
      width: size,
      height: size,
      ...(checked === 'unchecked' && {
        borderColor:
          getPropStyles(containerStyles).find(item => item.borderColor) ||
          'grey',
        backgroundColor: 'transparent',
      }),
      borderRadius: shape === 'square' ? 5 : size / 2,
    }),
    [size, checked, shape, containerStyles, getPropStyles],
  );

  /**
   * Gets icon type based on the checked prop
   * @type {function}
   * @return {string|null}
   * @private
   */
  const _getIconName = useCallback(() => {
    switch (checked) {
      case 'indeterminate':
        return 'minus';
      case 'checked':
        return 'check';
      default:
        return null;
    }
  }, [checked]);

  const getPropStyles = useCallback(() => {
    if (Array.isArray(containerStyles)) {
      return containerStyles;
    }
    return [containerStyles];
  }, [containerStyles]);
  /**
   * Icon content
   */
  const content = (
    <Icon
      name={_getIconName()}
      color={checked !== 'unchecked' ? iconColor : 'transparent'}
      size={iconSize}
      style={checked === 'indeterminate' && {height: iconSize - 2}}
    />
  );

  /**
   * Renders different types of TouchableComponent based on the touchableType Prop
   * @param children
   * @return {*}
   * @private
   */
  const _renderTouchable = children => {
    const allTouchableProps = {
      hitSlop,
      ...touchableProps,
      onPress: _onPress,
    };
    switch (touchableType) {
      case 'highlight':
        return (
          <TouchableHighlight
            {...allTouchableProps}
            style={[
              styles.container,
              ...getPropStyles(),
              _getContainerStyles(),
            ]}>
            {children}
          </TouchableHighlight>
        );
      case 'opacity':
        return (
          <TouchableOpacity
            {...allTouchableProps}
            style={[
              styles.container,
              ...getPropStyles(),
              _getContainerStyles(),
            ]}>
            {children}
          </TouchableOpacity>
        );
      case 'withoutFeedback':
        return (
          <TouchableWithoutFeedback
            {...allTouchableProps}
            style={[
              styles.container,
              ...getPropStyles(),
              _getContainerStyles(),
            ]}>
            {children}
          </TouchableWithoutFeedback>
        );
    }
  };

  return <Animated.View>{_renderTouchable(content)}</Animated.View>;
}
Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  indeterminate: PropTypes.bool,
  // Touchable props
  touchableType: PropTypes.oneOf(['opacity', 'highlight', 'withoutFeedback']),
  touchableProps: PropTypes.object,
  // styles
  containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconColor: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']),
  size: PropTypes.number,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
  indeterminate: false,
  // Touchable props
  touchableType: 'opacity',
  touchableProps: {},
  // styles
  shape: 'square',
  iconColor: 'white',
  size: 24,
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
});
