import addClassesById from './addclassesbyid';

const DEFAULT_OPTIONS = {
  addClassesById: true,
  addClassesByIdMappings: null,
};

export default async function (inputSource, options) {
  if (!inputSource) {
    throw new Error('Error: No input source.');
  }

  const config = Object.assign({}, DEFAULT_OPTIONS, options);
  let outputSource = inputSource;

  if (config.addClassesById) {
    outputSource = await addClassesById(outputSource, config.addClassesByIdMappings);
  }

  return outputSource;
}
