import svgTooling from '../src';
import fs from 'fs';
import path from 'path';

async function svg() {
  const inputPath = path.resolve(__dirname, './robot-src.svg');
  const outputPath = path.resolve(__dirname, './robot.svg');

  const robot = await svgTooling(fs.readFileSync(inputPath, 'utf8'), {
    addClassesById: true,
    addClassesByIdMappings: {
      robot: 'Robot',
      'Right-hand': 'Robot-rightHand',
      'Right-hand-inner': 'Robot-rightHandInner',
      'Right-arm': 'Robot-rightArm',
      'Left-hand': 'Robot-leftHand',
      'Left-hand-inner': 'Robot-leftHandInner',
      'Left-arm': 'Robot-leftArm',
    },
  });

  fs.writeFileSync(outputPath, robot, 'utf8');
}

export default svg;
