  export default function getSearchTextAt(
    blockText,
    position,
    trigger
  ) {
    const str = blockText.substr(0, position);
    const begin = trigger.length === 0 ? 0 : str.lastIndexOf(trigger);
    const matchingString =
      trigger.length === 0 ? str : str.slice(begin + trigger.length);
    const end = str.length;
  
    return {
      begin,
      end,
      matchingString,
    };
  }