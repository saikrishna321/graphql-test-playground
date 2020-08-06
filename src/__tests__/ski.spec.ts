import find from '../api/graphqlApi';
import Joi from '@hapi/joi';
import { LiftStatus } from '../enums/liftStatuses'

it('Should be able to fine ski resorts', async () => {
  await find.skiResorts(async ({ lift, trail }) => {
    lift.shouldHaveLiftCapacity(8);
    lift.shouldHaveStatus(LiftStatus.Open);
    lift.shouldHaveName('Panorama');

    trail.isTrees(true);
  });
});

it('Should be able to verify Trail Schema', async () => {
  const schema = Joi.object({
    trees: Joi.boolean().required(),
    name: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
    groomed: Joi.boolean(),
    night: Joi.boolean(),
    status: Joi.string(),
    difficulty: Joi.string(),
    accessedByLifts: Joi.array().items(Joi.object({
      trailAccess: Joi.array()
    })),
  });
  await find.skiResorts(async ({ response }) => {
    await schema.validateAsync(response.data.Trail);
  });
});
