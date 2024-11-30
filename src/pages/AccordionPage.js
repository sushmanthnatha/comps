import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'What is SASS ?',
      content:
        'It abbreviates is Syntactically awesome styleshees, extends various ways to better configure css',
    },
    {
      id: '2',
      label: 'what is clsx ?',
      content:
        'Its a classname library for grouping classnames in easier way and managing the classnames conditionaly',
    },
    {
      id: '3',
      label: 'what is useCallback ?',
      content:
        "Its only used to wrap callbacks so it wont be called again and again when there 's no change in that",
    },
  ];
  return (
    <Accordion items={items} />
  );
}

export default AccordionPage;
