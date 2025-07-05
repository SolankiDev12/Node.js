const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
const userSchema = require('../models/user')
const CandidateSchema = require('../models/candidate');
const { jwtMiddlewareToken , generateToken } = require('../jwt')

//For admin

const checkAdminRole = async(UserId) => 
    {
        try{
            const user = await CandidateSchema.findById(UserId);
            return user.role === 'admin'
        }catch(err)
        {
            return false;
        }
    }

router.post('/', jwtMiddlewareToken,async(req,res) => {
    try{
        if(await !checkAdminRole(req.userpayload.id))
        {
            return res.status(403).json({error: 'Access denied. Admins only.'});    
        }

        const data = req.body;
        const newCandidate = new CandidateSchema(data);
        const response = await newCandidate.save();
        console.log('Candidate Data saved');

        res.status(200).json({response : response});
    }catch(err)
    {
        console.log(err);
        res.status(500).json({err : 'Internal Server Error'});
    }
}) 

router.put('/:candidateID', jwtMiddlewareToken,async (req, res) => {
    try {
        if(!checkAdminRole(req.userpayload.id))
        {
            return res.status(403).json({error: 'Access denied. Admins only.'});    
        }

        const candidateID = req.params.candidateID;
        const updateddata = req.body;

        const response = await CandidateSchema.findByIdAndUpdate(candidateID, updateddata, 
            { new: true },
            { runValidators: true } // Ensures that the update respects the schema validation rules
        );
        if (!response) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json({ message: 'Data updated successfully', response: response });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:candidateID', jwtMiddlewareToken,async (req, res) => {
    try {
        if(!checkAdminRole(req.userpayload.id))
        {
            return res.status(403).json({error: 'Access denied. Admins only.'});    
        }

        const candidateID = req.params.candidateID;
        
        const response = await CandidateSchema.findByIdAndDelete(candidateID);
        if (!response) {
            return res.status(404).json({ error: 'Candidate not found' });
        }

        console.log('Candidate Deleted successfully');
        res.status(200).json({ message: 'deleted successfully', response: response });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/vote/:candidateID', jwtMiddlewareToken, async(req, res) => {
   candidateID = req.params.candidateID;
   userID = req.userpayload.id;

   try{
        const candidate = await CandidateSchema.findById(candidateID);
        if(!candidate)
        {
            return res.status(404).json({error: 'Candidate not found'});
        }

        const user = await userSchema.findById(userID);
        if(!user)
        {
            return res.status(404).json({error: 'User not found'});
        }

        if(user.isVoted)
        {
            res.status(403).json({error: 'User has already voted'});
        }

        if(user.role === 'admin')
        {
            return res.status(403).json({error: 'Admins cannot vote'});
        }

        // Update the candidate's vote count
        candidate.votes.push({user : userID});
        candidate.voteCount++;
        await candidate.save();
 
        // Update the user's voting status
        user.isVoted = true;
        await user.save();
        console.log('Vote cast successfully');

        res.status(200).json({message: 'Vote cast successfully', candidate: candidate});    

   }catch(err)
   {
         console.log(err);
         res.status(500).json({error: 'Internal Server Error'});    
   }
})


module.exports = router;