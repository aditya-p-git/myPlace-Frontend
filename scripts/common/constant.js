/*!
 * constant.js
 * @project   PEOPLE TRACKER
 * @date      2015-10-27 
 * @author    GOVIND MAHESHWARI, SapientNitro <gmaheshwari2@sapient.com>
 */

'use strict';
// Creating constant Component
MyPlace.constants = (function() {

    return {
        labels: {
            login :{

                // parsley required messages
                'sapient_Id'                : 'Please enter Sapient ID',
                'password'                  : 'Please enter password'
            },
            exitForm : {
                
                // parsley required messages
                'name'                      : 'enter name',
                'sapient_Id'                : 'enter Sapient ID',
                'exitType'                  : 'select exit type',
                'project_name'              : 'enter project name',
                'current_location'          : 'enter current location',
                'exit_date'                 : 'enter exit date',
                'last_working_date'         : 'enter working date',
                'voluntary_exit'            : 'select a reason if it is a voluntary exit',
                'primary_reason'            : 'select a reason',
                'secondary_reason'          : 'select a reason',
                'add_context'               : 'give details about exit',
                'when_found'                : 'select a date',
                'new_company'               : 'provide the name of new company',
                'new_role'                  : 'provide new role of individual',
                'domain_name'               : 'the domain name',
                'team_name'                 : 'provide the team name',
                'rehire'                    : 'select rehire scenario',
                'ps_interview'              : 'Select atleast one',
                'attachment'                : 'attach a file',
                'at_client'                 : 'Select atleast one',
                'attached_file'             : 'attach a file(.eml, .pdf only)',

                // parsley error messages
                'name_error'                : '',
                'sapient_Id_error'          : 'Enter a valid Sapient ID',
                'exitType_error'            : ' ',
                'project_name_error'        : ' ',
                'current_location_error'    : '',
                'exit_date_error'           : ' ',
                'last_working_date_error'   : ' ',
                'voluntary_exit_error'      : ' ',
                'primary_reason_error'      : ' ',
                'secondary_reason_error'    : ' ',
                'add_context_error'         : ' ',
                'when_found_error'          : ' ',
                'new_company_error'         : ' ',
                'new_role_error'            : ' ',
                'domain_name_error'         : ' ',
                'team_name_error'           : ' ',
                'rehire_error'              : ' ',
                'ps_interview_error'        : ' ',
                'attachment_error'          : ' ',
                'at_client_error'           : ' ',
                'attached_file_error'       : 'Invalid file, please attach( .eml, .msg only)'
            }
        },

        // messages used by message bus.
        msg: {

            // Login messages.
            login: {
                success                     : 'Login.Success',
                failure                     : 'Login.Failure',
            },

            // exit form submission messages.
            exitForm: {
                success                     : 'form.Success',
                failure                     : 'form.Failure',
            },
            
            // logout messages.
            logout: {
                success                     : 'Logout.Success',
                failure                     : 'Logout.Failure',
            },
            
            // logout messages.
            reportFilter: {
                success                     : 'Logout.Success',
                failure                     : 'Logout.Failure',
            }
        }
    };
})();
