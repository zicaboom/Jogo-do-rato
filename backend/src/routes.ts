import { Router } from "express";
import { CreateGameController } from "./useCases/CreateGame/CreateGameController";
import { CreateMouseController } from "./useCases/CreateMouse/CreateMouseController";
import { GetGameStateController } from "./useCases/GetGameState/GetGameStateController";

const routes = Router()

const createGameController = new CreateGameController()
const createMouseController = new CreateMouseController()
const getGameStateController = new GetGameStateController()

routes.post('/', createGameController.handle)
routes.post('/mouse', createMouseController.handle)

routes.get('/', getGameStateController.handle)

export default routes